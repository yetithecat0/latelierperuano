import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
const locales = ['es', 'fr', 'en'];

export default getRequestConfig(async ({requestLocale}) => {
  // Extract locale from requestLocale (Next.js 15 / next-intl v4 standard parameter) or fallback to 'es'
  let locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as any)) {
    locale = 'es';
  }

  return {
    locale: locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
