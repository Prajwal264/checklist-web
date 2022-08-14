export type ErrorResponse = {
  error: string;
} 
export type ApiResponse<T> = T | ErrorResponse;
export default class RestApiService {

  protected suffix: string;

  protected updateContextPath(contextPath: string) {
    this.suffix = `http://localhost:4000/api/${contextPath}/`;
  }

  protected get(url: string) {
    url = this.suffix + url;
    return fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
    });
  }

  protected async post(url: string, body: any) {
    url = this.suffix + url;
    console.log(body);
    const res = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      body: JSON.stringify(body),
    });
    return res.json();
  }

  protected async patch(url: string, body: any) {
    url = this.suffix + url;
    const res = await fetch(url, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      body: JSON.stringify(body),
    });
    return res.json();
  }

  protected async put(url: string, body: any) {
    url = this.suffix + url;
    const res = await fetch(url, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      body: JSON.stringify(body),
    });
    return res.json();
  }

  protected async delete(url: string) {
    url = this.suffix + url;
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
    });
    return res.json();
  }
};