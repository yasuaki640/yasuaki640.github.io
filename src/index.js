// Bootstrapのスタイルシート側の機能を読み込む
import "bootstrap/dist/css/bootstrap.min.css";

// BootstrapのJavaScript側の機能を読み込む
import "bootstrap";

//iframeレスポンシブル対応用のCSS
import "./modules/iframe.css"

//文字の色を変えるjsファイル
import {setRandomColor} from "./modules/set-random-color";

setRandomColor();
