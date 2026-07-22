## 1. Objetivo do projeto

O objetivo desse projeto é a criação de um CRUD de autenticação de usuários para praticar.

## 2. Regras a serem seguidas

### 2.1 Git Conventional Commits

Todos os commits devem seguir a convenção [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>[escopo opcional]: <descrição curta>

[corpo opcional]

[rodapé opcional]
```

**Tipos permitidos:**
| Tipo | Quando usar |
|---|---|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `chore` | Tarefas de manutenção (deps, config) |
| `refactor` | Refatoração sem mudança de comportamento |
| `style` | Formatação, sem lógica alterada |
| `docs` | Documentação |
| `test` | Adição ou ajuste de testes |
| `ci` | Mudanças em CI/CD |
| `perf` | Melhorias de performance |
| `build` | Mudanças no sistema de build |

**Exemplos:**
```
feat(auth): add JWT middleware with role verification
fix(barcode): return 409 on duplicate barcode instead of raw db error
chore(deps): bump prisma to 5.x stable
refactor(scanner): extract barcode lookup into a reusable hook
```

### 2.2 Think Before Coding

Don't assume. Don't hide confusion. Surface tradeoffs.

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2.3 Simplicity First

Minimum code that solves the problem. Nothing speculative.
- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### 2.4 Surgical Changes

Touch only what you must. Clean up only your own mess.

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

### 2.5 Lembre-se que o intuito aqui é a prática

- Antes de partir para a execução, responda as minhas perguntas e me dê opções para a resolução dos problemas. Não resolva sem que eu peça explicitamente.
