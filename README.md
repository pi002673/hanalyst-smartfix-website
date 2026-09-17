# HANALYST SmartFix - Website

Apresentação web do **HANALYST SmartFix**, a solução inteligente de remediação automatizada de código ABAP de ECC para S/4HANA.

## 📋 Sobre

**HANALYST SmartFix** é uma solução desenvolvida pela **Inetum** que automatiza a transformação de código ABAP legado (ECC) para ser compatível com SAP S/4HANA.

### Principais Características

- ✅ **18+ Regras de Transformação** - Cobertura completa dos cenários S/4HANA
- 🤖 **Processamento Híbrido** - IA Generativa + Regras Determinísticas
- ⚡ **Automatizado 100%** - Reduz semanas em dias
- 🔒 **Controle Total** - Revise antes de aplicar, rollback automático
- 📊 **Rastreabilidade** - Histórico completo de todas as mudanças
- 🚀 **Escalável** - De pequenos patches a transformações em toda empresa

## 🏗️ Estrutura

```
hanalyst-smartfix-website/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript interativo
├── README.md           # Este arquivo
└── LICENSE             # Licença do projeto
```

## 🚀 Como Usar

### Localmente

1. Clone o repositório:
```bash
git clone https://github.com/inetum-sap/hanalyst-smartfix-website.git
cd hanalyst-smartfix-website
```

2. Abra o arquivo `index.html` em um navegador:
```bash
# No macOS
open index.html

# No Windows
start index.html

# No Linux
xdg-open index.html
```

### GitHub Pages

Este site está configurado para ser hospedado no GitHub Pages:

1. Faça push para o repositório:
```bash
git add .
git commit -m "Initial commit: HANALYST SmartFix website"
git push origin main
```

2. Ative GitHub Pages nas configurações do repositório:
   - Settings → Pages
   - Branch: `main`
   - Folder: `/ (root)`

3. O site estará disponível em: `https://seu-usuario.github.io/hanalyst-smartfix-website`

## 📱 Funcionalidades

### Navegação
- Menu sticky com scroll suave
- Links de navegação responsivos
- Destaque automático da seção ativa

### Seções

1. **Visão Geral** - Apresentação da solução
2. **Funcionalidades** - 4 modos de execução e 18 regras
3. **Como Funciona** - Workflow em 6 passos
4. **Benefícios** - ROI e vantagens
5. **Especificações Técnicas** - Detalhes de integração
6. **Contacto** - Formulário de demo

### Design

- **Responsivo** - Funciona em desktop, tablet e mobile
- **Moderno** - Inspirado no design da Inetum
- **Acessível** - Contraste adequado e navegação intuitiva
- **Performante** - CSS otimizado, sem dependências externas

## 🎨 Cores

- Azul Primário: `#0052cc` (Inetum brand)
- Laranja Secundário: `#f57c00`
- Cyan Accent: `#26c6da`
- Textos: `#1a1a1a`
- Fundos: `#f5f5f5` / `#ffffff`

## 🔗 Links Úteis

- [Inetum SAP Services](https://www.inetum.com/pt/homepage/servicos/sap-services.html)
- [HANALYST SmartFix - Apresentação (PowerPoint)](./HANALYST_SmartFix_Presentation.pptx)
- [Inetum Portugal](https://www.inetum.com/pt/pt.html)

## 📝 Conteúdo

### 18 Regras de Transformação

| ID | Regra | Descrição |
|----|-------|-----------|
| 001 | MATNR Length | Estende campos de material para 18 dígitos |
| 002 | Tabelas Obsoletas | Identifica e substitui tabelas removidas |
| 003 | Campos Removidos | Localiza campos descontinuados |
| 004 | SELECT SINGLE | Optimiza queries |
| 005 | Binary Search | Ordenação eficiente |
| 006 | Type Pools | Migra type pools obsoletos |
| 007 | Call Transaction | Moderniza chamadas |
| 008 | Business Partner | Migra para BP |
| 009 | Includes Obsoletas | Remove includes |
| 010 | Data Types | Moderniza tipos |
| 011 | Credit Management | Atualiza lógica |
| 012 | Output Management | Moderniza outputs |
| 013 | SELECT * Fix | Especifica colunas |
| 014-018 | Regras Determinísticas | Transformações automáticas |

## 🤝 Contacto

- **Email**: info@inetum.com
- **Website**: https://www.inetum.com/pt/pt.html
- **LinkedIn**: https://www.linkedin.com/company/inetum/
- **Twitter/X**: https://twitter.com/inetum_world

## 📄 Licença

© 2026 Inetum. Todos os direitos reservados.

HANALYST SmartFix é uma marca registada da Inetum.

---

**Desenvolvido com ❤️ para modernização SAP S/4HANA**
