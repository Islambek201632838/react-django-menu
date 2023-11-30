
export interface BlogType {
    id: number | undefined;
    category: string; // Assuming `category` has an `id` and `name`
    title: string;
    slug: string | undefined;
    excerpt: string | undefined;
    content: string;
    image: string | undefined; // URL of the image
    ingredients: string | undefined;
    postlabel: string | undefined;
    price: number | string; // Assuming price is represented as a number
  }

  export interface CategoryType {
    id: number | null;
    name: string;
    image: string | undefined;// URL of the image
  }
  
  export interface PostsCardProps {
    myDirection: string ;
    title: string;
    excerpt: string |  undefined;
    blogHref: string;
    image: string |  undefined;
    price: number | string;
  }

  export interface PostType {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    price: number;
    // Add any other fields that your posts have
  }