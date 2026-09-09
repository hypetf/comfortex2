import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'

const cssStylesAsModulesPlugin = {
  name: 'css-styles-as-modules',
  enforce: 'pre',
  resolveId(id, importer) {
    if (id.endsWith('.styles.css') && importer) {
      const cleanId = id.split('?')[0];
      const resolved = path.resolve(path.dirname(importer), cleanId);
      return resolved.replace(/\.styles\.css$/, '.styles.module.css');
    }
  },
  load(id) {
    const cleanId = id.split('?')[0];
    if (cleanId.endsWith('.styles.module.css')) {
      const realPath = cleanId.replace(/\.styles\.module\.css$/, '.styles.css');
      if (fs.existsSync(realPath)) {
        return fs.readFileSync(realPath, 'utf8');
      }
    }
  },
  handleHotUpdate({ file, server }) {
    if (file.endsWith('.styles.css')) {
      const virtualFile = file.replace(/\.styles\.css$/, '.styles.module.css');
      const mod = server.moduleGraph.getModuleById(virtualFile);
      if (mod) {
        server.moduleGraph.invalidateModule(mod);
        return [mod];
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [cssStylesAsModulesPlugin, react()],
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
})
