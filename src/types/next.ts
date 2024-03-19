export type LayoutParams<T extends Record<string, string | string[]>> = {
    children: React.ReactNode;
    params: T;
};

export type PageParams<T extends Record<string, string | string[]>> = {
    searchParams: {[key: string]: string | string[] | undefined };
    params: T;
};
