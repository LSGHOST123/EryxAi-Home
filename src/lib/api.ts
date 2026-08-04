const TARGET_BASE_URL = 'https://script.google.com/macros/s/AKfycbzmkNoWvTNRLhW-rNp7WijNAV_9kv5gez6khybt79VequBOfmmeGLHH_P07JIjDUsZ7nQ/exec'; 
const ALPHA_PROXY_URL = 'https://script.google.com/macros/s/AKfycbzmkNoWvTNRLhW-rNp7WijNAV_9kv5gez6khybt79VequBOfmmeGLHH_P07JIjDUsZ7nQ/exec';

/**
 * fetchWithProxy: Helper universal para bypass de CORS.
 * Resolve automaticamente problemas de query string e respostas mistas (JSON/Text).
 */
export const fetchWithProxy = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  let fullTargetUrl = TARGET_BASE_URL + cleanEndpoint;

  if ((fullTargetUrl.match(/\?/g) || []).length > 1) {
    const parts = fullTargetUrl.split('?');
    fullTargetUrl = parts[0] + '?' + parts.slice(1).join('&');
  }

  const url = import.meta.env.DEV 
    ? `/api-proxy${cleanEndpoint}` 
    : `${ALPHA_PROXY_URL}?url=${encodeURIComponent(fullTargetUrl)}`;

  const fetchOptions: RequestInit = {
    ...options,
    headers: {
      'Accept': 'application/json',
      ...options?.headers,
    }
  };

  if (options?.method === 'GET' || !options?.method) {
    const cleanHeaders = { ...fetchOptions.headers } as Record<string, string>;
    delete cleanHeaders['Content-Type'];
    fetchOptions.headers = cleanHeaders;
  }

  try {
    const response = await fetch(url, fetchOptions);
    const textData = await response.text();
    
    try {
      return JSON.parse(textData) as T;
    } catch {
      return textData as unknown as T;
    }
  } catch (err) {
    console.error("Alpha Proxy Error:", err);
    throw err;
  }
};
