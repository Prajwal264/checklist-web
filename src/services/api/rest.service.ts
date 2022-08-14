export type ErrorResponse = {
  error: string;
} 
export type ApiResponse<T> = T | ErrorResponse;

const defaultRequestOptions: RequestInit = {
  headers: {'Content-Type': 'application/json'},
  mode: 'cors',
  credentials: 'include',
}
export default class RestApiService {

  protected suffix: string;

  protected updateContextPath(contextPath: string) {
    this.suffix = `http://localhost:4000/api/${contextPath}/`;
  }

  protected get(url: string) {
    url = this.suffix + url;
    return fetch(url, {
      method: 'GET',
      ...defaultRequestOptions
    });
  }

  protected async post(url: string, body: any) {
    url = this.suffix + url;
    console.log(body);
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      ...defaultRequestOptions,
    });
    return res.json();
  }

  protected async patch(url: string, body: any) {
    url = this.suffix + url;
    const res = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(body),
      ...defaultRequestOptions
    });
    return res.json();
  }

  protected async put(url: string, body: any) {
    url = this.suffix + url;
    const res = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(body),
      ...defaultRequestOptions
    });
    return res.json();
  }

  protected async delete(url: string) {
    url = this.suffix + url;
    const res = await fetch(url, {
      method: 'DELETE',
      ...defaultRequestOptions
    });
    return res.json();
  }
};