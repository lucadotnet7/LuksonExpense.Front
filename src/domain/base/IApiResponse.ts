export interface IApiResponse<T> {
    statusCode: string;
    content: T;
}