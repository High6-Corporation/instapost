import { getDynamicFormFields } from '@/lib/gravity-forms/contactform';
import QuoteFormContextBridge from "./QuoteFormContextBridge";

export default async function QuoteFormSection() {
  // Fetch form fields from WordPress Gravity Forms (Form ID 2 - quote form)
  const fields = await getDynamicFormFields(process.env.WP_GRAVITY_FORM_QUOTE_ID);

  return (
    <QuoteFormContextBridge fields={fields} formId={process.env.WP_GRAVITY_FORM_QUOTE_ID} />
  );
}
