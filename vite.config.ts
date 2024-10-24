import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    define: {
      'process.env.VITE_API_USERNAME': JSON.stringify(env.VITE_API_USERNAME),
      'process.env.VITE_API_PASSWORD': JSON.stringify(env.VITE_API_PASSWORD),
    },
    server: {
      proxy: {
        '/api': {
          target: 'https://api.aedb.online',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/media': {
          target: 'https://api.aedb.online',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/media/, ''),
        },
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  }
});