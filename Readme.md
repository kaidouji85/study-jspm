# jspm検証

このリポジトリは[jspm](https://jspm.org/)検証用です。
CDNからのインポートだけで、npmパッケージが使えるか否かをテストしました。

## 動かし方

public配下をWebサーバに配置すれば、そのまま動きます。
一応、このリポジトリにもhttp-serverを付けたので、以下コマンドですぐに動かせます。

### 初回

```
cd <本リポジトリをcloneした場所>
npm install
npm start

# コンソールに表示されたURLをブラウザで開く
```

### 2回目以降

```
cd <本リポジトリをcloneした場所>
npm start

# コンソールに表示されたURLをブラウザで開く
```

## コード解説

public/index.jsが検証内容です。
以下コードでnpmパッケージをCDN経由で読み込んでいます。

```
import {GbraverBurstCore, ArmDozers, ArmDozerIdList} from "https://jspm.dev/gbraver-burst-core";
```
