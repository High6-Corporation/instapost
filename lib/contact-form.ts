interface ContactFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

interface FormSubmissionResponse {
  is_valid: boolean;
  validation_messages?: Record<string, string>;
  confirmation_message?: string;
}

export async function submitContactForm(data: ContactFormData): Promise<FormSubmissionResponse> {
  const wordpressUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://instapost.beta01.site';
  const consumerKey = process.env.NEXT_PUBLIC_WP_CONSUMER_KEY;
  const consumerSecret = process.env.NEXT_PUBLIC_WP_CONSUMER_SECRET;
  const formId = process.env.NEXT_PUBLIC_GRAVITY_FORM_ID || '1';

  console.log('Submitting form with data:', data);
  console.log('WordPress URL:', wordpressUrl);
  console.log('Form ID:', formId);

  // Map form data to Gravity Forms field structure
  const formFields = [
    { id: 1, value: data.first_name },
    { id: 3, value: data.last_name },
    { id: 4, value: data.email },
    { id: 5, value: data.phone },
    { id: 6, value: data.interest },
    { id: 7, value: data.message },
  ];

  console.log('Form fields:', formFields);

  try {
    const apiUrl = `${wordpressUrl}/wp-json/gf/v2/forms/${formId}/submissions?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    console.log('API Endpoint:', apiUrl);

    const response = await fetch(
      apiUrl,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input_1: data.first_name,
          input_3: data.last_name,
          input_4: data.email,
          input_5: data.phone,
          input_6: data.interest,
          input_7: data.message,
        }),
      }
    );

    console.log('Response status:', response.status);

    const result = await response.json();
    console.log('Full API response:', JSON.stringify(result, null, 2));
    
    if (!response.ok) {
      console.error('API Error Response:', result);
      throw new Error(result.message || result.error || `HTTP error! status: ${response.status}`);
    }

    console.log('Form submission successful:', result);
    return result;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}
