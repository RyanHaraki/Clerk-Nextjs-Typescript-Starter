export {} 

declare global {
    interface Window {
        Prism: any;
    }

    interface Post {
        title: string;
        content: string;
        userId: string;
    }
}
