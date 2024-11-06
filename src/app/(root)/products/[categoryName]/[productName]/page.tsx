import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { deSlugifyString, formatPrice } from "@/lib/utils";
import { db } from "@/server/db";
import { products } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import Image from "next/image";
import { notFound } from "next/navigation";

interface props {
  params: Promise<{ productName: string }>;
}
export default async function ProductDetailPage(props0: props) {
  const params = await props0.params;

  const {
    productName
  } = params;

  const deslugifiedProductName = deSlugifyString(productName);

  const product = await db.query.products.findFirst({
    where: eq(products.name, deslugifiedProductName),
  });

  if (!product) {
    notFound();
  }

  return (
    <main key="1" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid items-start gap-6 md:grid-cols-2 lg:gap-12">
        <div className="grid items-start gap-3 md:grid-cols-5">
          <div className="md:col-span-4">
            <Image
              alt="Product Image"
              className="aspect-[1/1] w-full overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-gray-800"
              height="600"
              src={product.imageUrl!}
              width="600"
            />
          </div>
        </div>
        <div className="grid items-start gap-4 md:gap-10">
          <div className="grid gap-4">
            <h1 className="inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-3xl font-bold capitalize text-transparent lg:text-4xl">
              {product.name}
            </h1>
            <ScrollArea className="h-[200px] rounded-md">
              <p>{product.description}</p>
            </ScrollArea>
            <div className="my-5 flex items-center justify-between">
              <div className="text-4xl font-bold">
                {formatPrice(product.price!)}
              </div>
              <div>
                <div className="flex gap-0.5">
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:flex-row">
              <Button size="lg">Add to cart</Button>
              <Button size="lg" variant="outline">
                Add to wishlist
              </Button>
              <Button size="lg" variant="outline">
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 grid items-start gap-6 md:grid-cols-2 lg:gap-12">
        <div className="grid items-start gap-4 md:gap-10">
          <h2 className="text-2xl font-bold lg:text-3xl">Leave a comment</h2>
          <form className="grid gap-4 md:gap-10">
            <input
              className="w-full rounded-lg border border-gray-200 p-2 dark:border-gray-800"
              placeholder="Your name"
              type="text"
            />
            <textarea
              className="w-full rounded-lg border border-gray-200 p-2 dark:border-gray-800"
              placeholder="Your comment"
            />
            <Button size="lg">Submit comment</Button>
          </form>
        </div>
        <ScrollArea className="h-[450px]">
          <div className="grid items-start gap-4 md:gap-10">
            <h2 className="text-2xl font-bold lg:text-3xl">Comments</h2>
            <div className="w-full rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="font-bold">John Doe</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consequat.
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ThumbsUpIcon className="h-4 w-4" /> Like (0)
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ThumbsDownIcon className="h-4 w-4" /> Dislike (0)
                </Button>
              </div>
            </div>
            <div className="w-full rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="font-bold">John Doe</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consequat.
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ThumbsUpIcon className="h-4 w-4" /> Like (0)
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ThumbsDownIcon className="h-4 w-4" /> Dislike (0)
                </Button>
              </div>
            </div>
            <div className="w-full rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="font-bold">John Doe</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consequat.
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ThumbsUpIcon className="h-4 w-4" /> Like (0)
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ThumbsDownIcon className="h-4 w-4" /> Dislike (0)
                </Button>
              </div>
            </div>
            <div className="w-full rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="font-bold">John Doe</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consequat.
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ThumbsUpIcon className="h-4 w-4" /> Like (0)
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ThumbsDownIcon className="h-4 w-4" /> Dislike (0)
                </Button>
              </div>
            </div>
            <div className="w-full rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <h3 className="font-bold">John Doe</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consequat.
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ThumbsUpIcon className="h-4 w-4" /> Like (0)
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ThumbsDownIcon className="h-4 w-4" /> Dislike (0)
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </main>
  );
}

function ThumbsDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
