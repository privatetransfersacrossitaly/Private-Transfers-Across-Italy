import type { Locale } from "@/lib/site";

/**
 * A blog post as stored in D1 (`blogs`, migrations/0005_create_blog.sql).
 *
 * Field for field the shape Italy Taxi Service uses, so posts written for
 * one site read the same way on the other. `tags` arrives as a JSON string
 * and is parsed in the repository.
 */
export type BlogPost = {
  id: string;
  language: Locale;
  slug: string;
  /** Italian rows: slug of the English original. */
  translation_of: string | null;
  title: string;
  excerpt: string | null;
  /** HTML. Always pass through `prepareBlogHtml` before rendering. */
  content: string;
  featured_image_url: string | null;
  featured_image_alt: string | null;
  category: string;
  tags: string[];
  status: "draft" | "published";
  author_id: string | null;
  read_time: string | null;
  seo_title: string | null;
  seo_description: string | null;
  focus_keyword: string | null;
  created_at: string;
  updated_at: string;
  published_at: string | null;
};

export type Blogger = {
  id: string;
  full_name: string;
  avatar_url: string | null;
  bio: string | null;
};

/** What the listing and the related-posts block need, and nothing more. */
export type BlogSummary = Pick<
  BlogPost,
  | "id"
  | "language"
  | "slug"
  | "title"
  | "excerpt"
  | "featured_image_url"
  | "featured_image_alt"
  | "category"
  | "focus_keyword"
  | "read_time"
  | "published_at"
  | "updated_at"
>;

export type BlogPostWithAuthor = BlogPost & { author: Blogger | null };
