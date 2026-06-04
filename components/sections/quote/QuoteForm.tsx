"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  DynamicFormField,
  submitDynamicFormAction,
} from "@/lib/gravity-forms/contactform";
import { useCleanTalkBotDetector } from "@/lib/cleantalk/cleantalkscripts";
import Button from "@/components/ui/Button";
import type { QuoteModalVariant } from "./QuoteModalProvider";
import { useQuoteModal } from "./QuoteModalProvider";

interface QuoteFormProps {
  fields: DynamicFormField[];
  formId?: string;
  variant?: QuoteModalVariant;
  prefilledService?: string;
}

// Input field styles - matching contact form + Figma design
const inputClassName =
  "bg-white border border-[rgba(0,0,0,0.1)] rounded-[5px] h-[48px] w-full px-[14px] text-[16px] tracking-[-1px] placeholder:text-[#616161] focus:outline-none focus:border-[#5757ff] transition-colors font-sans";

const selectClassName =
  "bg-white border border-[rgba(0,0,0,0.1)] rounded-[5px] h-[48px] w-full px-[14px] text-[16px] tracking-[-1px] placeholder:text-[#616161] focus:outline-none focus:border-[#5757ff] transition-colors font-sans appearance-none";

const textareaClassName =
  "bg-white border border-[rgba(0,0,0,0.1)] rounded-[5px] h-[166px] w-full px-[14px] py-[14px] text-[16px] tracking-[-1px] placeholder:text-[#616161] focus:outline-none focus:border-[#5757ff] transition-colors resize-none font-sans";

// Services field IDs in Gravity Forms Form 2
const SERVICES_TEXT_FIELD_ID = 6;
const SERVICES_DROPDOWN_FIELD_ID = 7;

export default function QuoteForm({ fields, formId, variant = 'quote', prefilledService = '' }: QuoteFormProps) {
  const router = useRouter();
  const { closeQuoteModal } = useQuoteModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [selectValues, setSelectValues] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const { scriptFailed: ctScriptFailed } = useCleanTalkBotDetector();

  // In 'service' variant: submit service name as hidden value for the dropdown field
  const servicesDropdownField = fields.find(f => f.id === SERVICES_DROPDOWN_FIELD_ID);
  const servicesDropdownFieldName = servicesDropdownField ? `input_${servicesDropdownField.id}` : 'input_7';

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    if (ctScriptFailed) {
      setSubmitStatus({
        type: "error",
        message:
          "Security verification failed. Please refresh the page and try again.",
      });
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(event.currentTarget);

    // In service variant, ensure the dropdown field has the prefilled value
    if (variant === 'service' && prefilledService) {
      formData.set(servicesDropdownFieldName, prefilledService);
    }

    try {
      const ctToken =
        formData.get("ct_bot_detector_event_token")?.toString() || "";

      formData.delete("ct_bot_detector_event_token");

      const result = await submitDynamicFormAction(
        formData,
        fields,
        formId,
        ctToken,
      );

      if (result.success) {
        // Reset form fields
        formRef.current?.reset();
        setSelectValues({});
        setSubmitStatus({ type: null, message: "" });
        // Close the modal before navigating
        closeQuoteModal();
        router.push("/thank-you");
      } else {
        setSubmitStatus({ type: "error", message: result.message });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Should we show this field?
  function shouldShowField(field: DynamicFormField): boolean {
    if (variant === 'quote') {
      // Header variant: hide the services TEXT field (6), show dropdown (7)
      if (field.id === SERVICES_TEXT_FIELD_ID) return false;
    } else if (variant === 'service') {
      // Service variant: hide the services DROPDOWN (7), show text field (6)
      if (field.id === SERVICES_DROPDOWN_FIELD_ID) return false;
    }
    return true;
  }

  // Determine if a field should be required (dynamically for services fields)
  function isFieldRequired(field: DynamicFormField): boolean {
    // The currently-visible services field is always required
    if (field.id === SERVICES_TEXT_FIELD_ID && variant === 'service') return true;
    if (field.id === SERVICES_DROPDOWN_FIELD_ID && variant === 'quote') return true;
    return field.isRequired;
  }

  // Render field based on type
  function renderField(field: DynamicFormField) {
    const fieldName = `input_${field.id}`;
    const placeholder = field.placeholder;

    // Check if this is the services text field in service variant (pre-fill it)
    const isPrefilledServiceField = variant === 'service' && field.id === SERVICES_TEXT_FIELD_ID;
    const defaultValue = isPrefilledServiceField ? prefilledService : undefined;

    switch (field.type) {
      case "email":
        return (
          <div key={field.id}>
            <input
              id={fieldName}
              name={fieldName}
              type="email"
              placeholder={placeholder}
              required={isFieldRequired(field)}
              maxLength={field.maxLength}
              className={inputClassName}
              aria-label={field.label || undefined}
            />
          </div>
        );

      case "phone":
        return (
          <div key={field.id}>
            <input
              id={fieldName}
              name={fieldName}
              type="tel"
              placeholder={placeholder}
              required={isFieldRequired(field)}
              maxLength={field.maxLength}
              className={inputClassName}
              aria-label={field.label || undefined}
              onInput={(e) => {
                const input = e.target as HTMLInputElement;
                input.value = input.value.replace(/[^\d-]/g, "");
              }}
            />
          </div>
        );

      case "select":
        return (
          <div key={field.id} className="relative">
            <select
              id={fieldName}
              name={fieldName}
              required={isFieldRequired(field)}
              defaultValue=""
              onChange={(e) => {
                setSelectValues((prev) => ({
                  ...prev,
                  [field.name]: e.target.value,
                }));
              }}
              className={`${selectClassName} ${
                selectValues[field.name]
                  ? "text-[#616161]"
                  : "text-[#616161]"
              }`}
              aria-label={field.label || undefined}
            >
              <option value="" disabled>
                {placeholder}
              </option>
              {field.choices?.map((choice) => (
                <option
                  key={choice.value}
                  value={choice.value}
                  className="text-[#616161]"
                >
                  {choice.label}
                </option>
              ))}
            </select>
            {/* Custom dropdown icon from public/images */}
            <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
              <Image
                src="/images/dropdown-icon.png"
                alt=""
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          </div>
        );

      case "textarea":
        return (
          <div key={field.id}>
            <textarea
              id={fieldName}
              name={fieldName}
              placeholder={placeholder}
              rows={6}
              required={isFieldRequired(field)}
              maxLength={field.maxLength}
              defaultValue={defaultValue}
              className={textareaClassName}
              aria-label={field.label || undefined}
            />
          </div>
        );

      case "text":
      default:
        return (
          <div key={field.id}>
            <input
              id={fieldName}
              name={fieldName}
              type="text"
              placeholder={placeholder}
              required={isFieldRequired(field)}
              maxLength={field.maxLength}
              defaultValue={defaultValue}
              readOnly={isPrefilledServiceField}
              className={`${inputClassName} ${isPrefilledServiceField ? 'bg-gray-50 cursor-not-allowed' : ''}`}
              aria-label={field.label || undefined}
            />
          </div>
        );
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-[30px]"
    >
      {/* Honeypot field */}
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* In service variant: hidden input to submit the service name as the dropdown value */}
      {variant === 'service' && prefilledService && (
        <input
          type="hidden"
          name={servicesDropdownFieldName}
          value={prefilledService}
        />
      )}

      {/* Dynamic Fields */}
      {fields.filter(shouldShowField).map((field) => renderField(field))}

      {/* CleanTalk Error Alert */}
      {ctScriptFailed && (
        <div
          role="alert"
          aria-live="assertive"
          className="bg-amber-50 border border-amber-300 p-4 rounded"
        >
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <div>
              <p className="text-sm font-semibold text-amber-800 mb-1">
                Security Check Unavailable
              </p>
              <p className="text-sm text-amber-700">
                Please refresh the page to load the security verification.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Status Message */}
      {submitStatus.type && (
        <div
          role="alert"
          aria-live="assertive"
          className={`p-[14px] rounded-[10px] text-[14px] ${
            submitStatus.type === "success"
              ? "bg-green-100 text-green-800 border border-green-300"
              : "bg-red-100 text-red-800 border border-red-300"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      {/* Submit Button */}
      <div className="flex w-full justify-end">
        <Button
          variant="primary"
          showArrow={true}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}
