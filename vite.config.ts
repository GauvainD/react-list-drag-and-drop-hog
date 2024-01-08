import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts';

export default defineConfig({
    // depending on your application, base can also be "/"
    base: '',
    plugins: [dts(), react(), viteTsconfigPaths()],
    server: {    
        // this ensures that the browser opens upon server start
        open: true,
        // this sets a default port to 3000  
        port: 3000, 
    },
    build: {
        lib: {
            entry : resolve(__dirname, 'src/RLDD.tsx'),
            name: "react-list-drag-and-drop-hog",
            fileName: "RLDD"
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['react'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'React',
                },
            }
        }
    }
})
