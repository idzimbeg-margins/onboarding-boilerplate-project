import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import pluginChecker from 'vite-plugin-checker'

export default defineConfig({
	plugins: [react(), pluginChecker({ typescript: true })],
	server: {
		port: 5172
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	define: {
		'process.env': process.env
	}
})
