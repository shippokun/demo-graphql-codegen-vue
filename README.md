# demo-graphql-codegen-vue

## 事前準備

### API 編

Prisma x GraphQL で簡単に API を導入する

```bash
cd ..   # 別ディレクトリへ移動
git clone git@github.com:prisma/prisma-examples.git --depth=1　# サンプルプログラムをクローン
```

依存関係のインストール

```bash
cd prisma-examples/typescript/graphql-apollo-server
npm install
```

### Client 編

依存関係のインストール

```bash
npm install
```

## 開発

Compiles and hot-reloads for development

```bash
npm run start
```

Run your unit tests

```bash
npm run test
```

codegen

```bash
# API サーバー起動
cd ../prisma-examples/typescript/graphql-apollo-server
npm run dev

# Client codegen command
cd ../../../demo-graphql-codegen-vue
npm run generate
```
