// Components
import Button from "@/components/shared/Button";

/**
 * @description - This is the 404 page component. This page is displayed when a user tries to access a page that doesn't exist.
 * @returns - The 404 page
 */
export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center h-[80vh] w-full max-w-[800px] mx-auto px-3 md:px-6 lg:px-10">
            <h1 className="text-4xl font-bold font-header text-balance text-center">Oops! This Gallery Doesn&apos;t Exist.</h1>
            <p className="text-lg mt-4 font-body text-balance text-center">
                The page you&apos;re looking for might have been moved, removed, or might never have existed.
                But don&apos;t worry, art is all about exploration!
            </p>
            <div className="w-fit flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mx-auto mt-8">
                <Button href="/" color="dark" buttonText="Return to Homepage" isOutlined />
                <Button href="/collection" color="dark" buttonText="Discover Collection" isOutlined={false} />
            </div>
        </div>
    );
}