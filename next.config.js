/** @type {import('next').NextConfig} */
const nextConfig = {
    /**
     * Get an array of rewrites.
     *
     * @return {Array} An array of rewrites.
     */
    async rewrites() {
        return [
            {
                source: '/:any*',
                destination: '/',
            },
        ];
    }    
};

module.exports = nextConfig;
