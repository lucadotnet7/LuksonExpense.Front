export interface IState<T> {
    content: T;
    isLoading: boolean;
    error: string | null; 
}