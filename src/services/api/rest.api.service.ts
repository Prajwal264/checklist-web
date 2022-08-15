export type ErrorResponse = {
  error: string;
}
export type ApiResponse<T> = T | ErrorResponse;

import Cookies from 'js-cookie';

const defaultRequestOptions: RequestInit = {
  headers: { 'Content-Type': 'application/json' },
  mode: 'cors',
  credentials: 'include',
}
export default class RestApiService {

  protected suffix: string;

  protected authorized = false;

  protected updateContextPath(contextPath: string) {
    this.suffix = `http://localhost:4000/api/${contextPath}/`;
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
    const res = await fetch(url, {
      method: 'GET',
      ...defaultRequestOptions,
      headers: this.getHeaders(),
    });
    return res.json();
  }

  protected async post(url: string, body: any) {
    url = this.suffix + url;
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      ...defaultRequestOptions,
      headers: this.getHeaders(),
    });
    return res.json();
  }

  protected async patch(url: string, body: any) {
    url = this.suffix + url;
    const res = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(body),
      ...defaultRequestOptions,
      headers: this.getHeaders(),
    });
    return res.json();
  }

  protected async put(url: string, body: any) {
    url = this.suffix + url;
    const res = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(body),
      ...defaultRequestOptions,
      headers: this.getHeaders(),
    });
    return res.json();
  }

  protected async delete(url: string) {
    url = this.suffix + url;
    const res = await fetch(url, {
      method: 'DELETE',
      ...defaultRequestOptions,
      headers: this.getHeaders(),
    });
    return res.json();
  }
};