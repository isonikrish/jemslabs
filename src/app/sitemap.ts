export default function sitemap() {
    const baseURL = "https://jemslabs.xyz";

    return [
        {
            url: baseURL,
            lastModified: new Date().toISOString(),
        },
    ];
}
