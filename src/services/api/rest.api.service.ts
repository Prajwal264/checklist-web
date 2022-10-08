export const BASE_API_URL = process.env.BASE_API_URL + '/api';

export type ErrorResponse = {
  error: string;
}

export type ApiResponse<T> = T | ErrorResponse;

import Cookies from 'js-cookie';
import { navigate } from 'svelte-routing';

const defaultRequestOptions: RequestInit = {
  headers: { 'Content-Type': 'application/json' },
  mode: 'cors',
  credentials: 'include',
}
export default class RestApiService {

  protected suffix: string;

  protected authorized = false;

  protected async request(input: RequestInfo | URL, init?: RequestInit) {
    const res = await fetch(input, init)
    const response = await res.json();
    if (this.authorized) {
      if (response.status === "Token Expired") {
        const refreshtokenResponse = await fetch(`${BASE_API_URL}/auth/refreshtoken`, {
          method: 'POST',
          ...defaultRequestOptions,
          headers: this.getHeaders(),
        });
        const refreshTokenData = await refreshtokenResponse.json();
        if (!refreshTokenData.success) {
          navigate('/signin');
          return;
        }
        const response = await fetch(input, {
          ...init,
          headers: this.getHeaders(),
        })
        return await response.json();
      }
    }
    return response;
  }

  protected updateContextPath(contextPath: string) {
    this.suffix = `${BASE_API_URL}/${contextPath}/`;
  }

  private getHeaders() {
    const headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    if (this.authorized) {
      headers.append('Authorization', `Bearer ${Cookies.get('accessToken')}`)
    }
    return headers;
  }

  protected async get(url: string) {
    url = this.suffix + url;
    return await this.request(url, {
      method: 'GET',
      ...defaultRequestOptions,
      headers: this.getHeaders(),
    });
  }

  protected async post(url: string, body: any) {
    url = this.suffix + url;
    return await this.request(url, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(body),
      ...defaultRequestOptions,
      headers: this.getHeaders(),
    });
  }

  protected async patch(url: string, body: any) {
    url = this.suffix + url;
    return await this.request(url, {
      method: 'PATCH',
      body: JSON.stringify(body),
      ...defaultRequestOptions,
      headers: this.getHeaders(),
    });
  }

  protected async put(url: string, body: any) {
    url = this.suffix + url;
    return await this.request(url, {
      method: 'PUT',
      body: JSON.stringify(body),
      ...defaultRequestOptions,
      headers: this.getHeaders(),
    });
  }

  protected async delete(url: string) {
    url = this.suffix + url;
    return await this.request(url, {
      method: 'DELETE',
      ...defaultRequestOptions,
      headers: this.getHeaders(),
    });
  }
};