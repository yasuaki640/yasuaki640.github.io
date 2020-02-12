// Bootstrapのスタイルシート側の機能を読み込む
import "bootstrap/dist/css/bootstrap.min.css";

// BootstrapのJavaScript側の機能を読み込む
import "bootstrap";

// 多言語対応ライブラリを読み込む
import "glottologist";

const glot = new Glottologist();

//文字の色を変えるjsファイル
import {setRandomColor} from "./modules/set-random-color";

setRandomColor();
