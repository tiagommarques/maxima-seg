# Máxima Segurança - Projeto Web

## Estrutura de Pastas

```
maxima-seguranca/
├── index.html              # Página principal
├── tailwind.config.js      # Configuração do Tailwind
├── package.json            # Dependências Node
├── css/
│   ├── input.css           # Entrada para o compilador Tailwind
│   ├── custom.css          # Estilos customizados (glass-card, hero-overlay etc.)
│   └── styles.css          # ⚠️ GERADO pelo CLI (não edite manualmente)
├── js/
│   └── main.js             # Scripts (navbar scroll, form submit)
└── assets/
    └── images/
        ├── logo.png         # ⚠️ Adicione o logo aqui
        └── hero-bg.jpg      # ⚠️ Adicione a imagem de fundo aqui
```

---

## Como buildar o CSS (obrigatório)

### 1. Instale as dependências
```bash
npm install
```

### 2. Gere o CSS compilado
```bash
npx tailwindcss -i ./css/input.css -o ./css/styles.css --minify
```

### 3. Substitua o CDN no index.html

Após gerar o `styles.css`, abra o `index.html` e:

**Remova estas linhas:**
```html
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">...</script>
```

**Adicione esta linha no lugar:**
```html
<link rel="stylesheet" href="css/styles.css"/>
```

---

## Imagens

As imagens do Stitch (lh3.googleusercontent.com) expiram fora do ambiente deles.

Adicione manualmente:
- `assets/images/logo.png` → Logo da Máxima Segurança
- `assets/images/hero-bg.jpg` → Foto de fundo do hero (câmera de segurança)

---

## Fixes aplicados nesta versão

1. **Scroll indicator** → Corrigido de `absolute` para `fixed`, eliminando o bug de posicionamento no navegador
2. **JS separado** → Movido para `js/main.js`
3. **CSS separado** → Estilos customizados em `css/custom.css`
4. **Imagens locais** → `src` apontando para `assets/images/` com fallback `onerror`
5. **Estrutura de build** → Pronta para compilação com Tailwind CLI
