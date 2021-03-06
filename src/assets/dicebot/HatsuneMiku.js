/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy, $gvars = Opal.gvars, $hash2 = Opal.hash2;

  Opal.add_stubs(['$judgeRoll', '$nil?', '$upcase', '$===', '$getRandomSkillTableResult', '$getTableDiceCommandResult', '$=~', '$to_i', '$==', '$getChangedModifyText', '$[]', '$parren_killer', '$+', '$roll', '$collect', '$split', '$min', '$<=', '$length', '$first', '$check_success', '$each_with_index', '$clone', '$delete_at', '$max', '$-', '$<<', '$uniq!', '$join', '$each', '$>=', '$check_hit', '$bcdice', '$get_table_by_2d6', '$get_table_by_1d6', '$getD66Table', '$get_table_by_d66_swap', '$raise', '$map', '$kind_of?', '$!=', '$size', '$inspect', '$setPrefixes', '$keys']);
  return (function($base, $super, $parent_nesting) {
    function $HatsuneMiku(){};
    var self = $HatsuneMiku = $klass($base, $super, 'HatsuneMiku', $HatsuneMiku);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_HatsuneMiku_initialize_1, TMP_HatsuneMiku_gameName_2, TMP_HatsuneMiku_gameType_3, TMP_HatsuneMiku_getHelpMessage_4, TMP_HatsuneMiku_rollDiceCommand_5, TMP_HatsuneMiku_judgeRoll_8, TMP_HatsuneMiku_getChangedModifyText_10, TMP_HatsuneMiku_check_success_11, TMP_HatsuneMiku_getTableDiceCommandResult_12, TMP_HatsuneMiku_getD66Table_14, $a;

    
    
    Opal.defn(self, '$initialize', TMP_HatsuneMiku_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_HatsuneMiku_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_HatsuneMiku_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_HatsuneMiku_initialize_1, false), $zuper, $iter);
      self.sendMode = 2;
      return (self.d66Type = 2);
    }, TMP_HatsuneMiku_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_HatsuneMiku_gameName_2 = function $$gameName() {
      var self = this;

      return "初音ミクTRPG ココロダンジョン"
    }, TMP_HatsuneMiku_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_HatsuneMiku_gameType_3 = function $$gameType() {
      var self = this;

      return "HatsuneMiku"
    }, TMP_HatsuneMiku_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_HatsuneMiku_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "・判定(Rx±y@z>=t)\n" + "　能力値のダイスごとに成功・失敗の判定を行います。\n" + "　x：能力ランク(S,A～D)。数字指定で直接その個数のダイスが振れます\n" + "　y：修正値。A+2 あるいは A++ のように表記。混在時は A++,+1 のように記述も可能\n" + "　z：スペシャル最低値（省略：6）　t：目標値（省略：4）\n" + "　　例） RA　R2　RB+1　RC++　RD+,+2　RA>=5　RS-1@5>=6\n" + "　結果はネイロを取得した残りで最大値を表示\n" + "例） RB \n" + "　HatsuneMiku : (RB>=4) ＞ [3,5] ＞ \n" + "　　ネイロに3(青)を取得した場合 5:成功\n" + "　　ネイロに5(白)を取得した場合 3:失敗\n" + "・各種表\n" + "　ファンブル表 FT／致命傷表 CWT／休憩表 BT／目標表 TT／関係表 RT\n" + "　障害表 OT／リクエスト表 RQT／情景表 ST\n" + "・キーワード表\n" + "　ダーク DKT／ホット HKT／ラブ LKT／エキセントリック EKT／メランコリー MKT\n" + "・名前表 NT\n" + "　コア別　ダーク DNT／ホット HNT／ラブ LNT／エキセントリック ENT／メランコリー MNT\n" + "・オトダマ各種表\n" + "　性格表A OPA／性格表B OPB／趣味表 OHT／外見表 OLT／一人称表 OIT／呼び名表 OYT\n" + "　リアクション表 ORT／出会い表 OMT\n"
    }, TMP_HatsuneMiku_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$rollDiceCommand', TMP_HatsuneMiku_rollDiceCommand_5 = function $$rollDiceCommand(command) {
      var self = this, text = nil, string = nil, $case = nil;

      
      text = self.$judgeRoll(command);
      if ($truthy(text['$nil?']())) {
        } else {
        return text
      };
      string = command.$upcase();
      $case = string;
      if ("RTT"['$===']($case)) {return self.$getRandomSkillTableResult(command)};
      return self.$getTableDiceCommandResult(command);
    }, TMP_HatsuneMiku_rollDiceCommand_5.$$arity = 1);
    
    Opal.defn(self, '$judgeRoll', TMP_HatsuneMiku_judgeRoll_8 = function $$judgeRoll(command) {
      var $a, $b, TMP_6, TMP_7, self = this, skillRank = nil, modifyText = nil, signOfInequality = nil, targetText = nil, specialNum = nil, specialText = nil, commandText = nil, rankDiceList = nil, diceCount = nil, modify = nil, target = nil, isSort = nil, _ = nil, diceText = nil, diceList = nil, message = nil, dice = nil, total = nil, result = nil, texts = nil;

      
      if ($truthy(/^(R([A-DS]|\d+)([\+\-\d,]*))(@(\d))?((>(=)?)([\+\-\d]*))?(@(\d))?$/i['$=~'](command))) {
        } else {
        return nil
      };
      skillRank = (($a = $gvars['~']) === nil ? nil : $a['$[]'](2));
      modifyText = (($a = $gvars['~']) === nil ? nil : $a['$[]'](3));
      signOfInequality = (function() {if ($truthy((($a = $gvars['~']) === nil ? nil : $a['$[]'](7))['$nil?']())) {
        return ">="
        } else {
        return (($a = $gvars['~']) === nil ? nil : $a['$[]'](7))
      }; return nil; })();
      targetText = (function() {if ($truthy((($a = $gvars['~']) === nil ? nil : $a['$[]'](9))['$nil?']())) {
        return "4"
        } else {
        return (($a = $gvars['~']) === nil ? nil : $a['$[]'](9))
      }; return nil; })();
      specialNum = (($a = $gvars['~']) === nil ? nil : $a['$[]'](5));
      specialNum = ($truthy($a = specialNum) ? $a : (($b = $gvars['~']) === nil ? nil : $b['$[]'](11)));
      specialNum = ($truthy($a = specialNum) ? $a : 6);
      specialNum = specialNum.$to_i();
      specialText = (function() {if (specialNum['$=='](6)) {
        return ""
        } else {
        return "" + "@" + (specialNum)
      }; return nil; })();
      modifyText = self.$getChangedModifyText(modifyText);
      commandText = "" + "R" + (skillRank) + (modifyText);
      rankDiceList = $hash2(["S", "A", "B", "C", "D"], {"S": 4, "A": 3, "B": 2, "C": 1, "D": 2});
      diceCount = rankDiceList['$[]'](skillRank);
      if ($truthy(/^\d+$/['$==='](skillRank))) {
        diceCount = skillRank.$to_i()};
      modify = self.$parren_killer($rb_plus($rb_plus("(", modifyText), ")")).$to_i();
      target = self.$parren_killer($rb_plus($rb_plus("(", targetText), ")")).$to_i();
      isSort = 1;
      $b = self.$roll(diceCount, 6, isSort), $a = Opal.to_ary($b), (_ = ($a[0] == null ? nil : $a[0])), (diceText = ($a[1] == null ? nil : $a[1])), $b;
      diceList = $send(diceText.$split(/,/), 'collect', [], (TMP_6 = function(i){var self = TMP_6.$$s || this;
if (i == null) i = nil;
      return i.$to_i()}, TMP_6.$$s = self, TMP_6.$$arity = 1, TMP_6));
      if ($truthy(skillRank['$==']("D"))) {
        diceList = [diceList.$min()]};
      message = "" + "(" + (commandText) + (specialText) + (signOfInequality) + (targetText) + ") ＞ [" + (diceText) + "]" + (modifyText) + " ＞ ";
      if ($truthy($rb_le(diceList.$length(), 1))) {
        
        dice = diceList.$first();
        total = $rb_plus(dice, modify);
        result = self.$check_success(total, dice, signOfInequality, target, specialNum);
        message = $rb_plus(message, "" + (total) + ":" + (result));
        } else {
        
        texts = [];
        $send(diceList, 'each_with_index', [], (TMP_7 = function(pickup_dice, index){var self = TMP_7.$$s || this, rests = nil, colorList = nil, color = nil;
if (pickup_dice == null) pickup_dice = nil;if (index == null) index = nil;
        
          rests = diceList.$clone();
          rests.$delete_at(index);
          dice = rests.$max();
          total = $rb_plus(dice, modify);
          result = self.$check_success(total, dice, signOfInequality, target, specialNum);
          colorList = ["黒", "赤", "青", "緑", "白", "任意"];
          color = colorList['$[]']($rb_minus(pickup_dice, 1));
          return texts['$<<']("" + "　ネイロに" + (pickup_dice) + "(" + (color) + ")を取得した場合 " + (total) + ":" + (result));}, TMP_7.$$s = self, TMP_7.$$arity = 2, TMP_7));
        texts['$uniq!']();
        message = $rb_plus(message, $rb_plus("\n", texts.$join("\n")));
      };
      return message;
    }, TMP_HatsuneMiku_judgeRoll_8.$$arity = 1);
    
    Opal.defn(self, '$getChangedModifyText', TMP_HatsuneMiku_getChangedModifyText_10 = function $$getChangedModifyText(text) {
      var TMP_9, self = this, modifyText = nil, values = nil;

      
      modifyText = "";
      values = text.$split(/,/);
      $send(values, 'each', [], (TMP_9 = function(value){var self = TMP_9.$$s || this, $case = nil;
if (value == null) value = nil;
      return (function() {$case = value;
        if ("++"['$===']($case)) {return (modifyText = $rb_plus(modifyText, "+2"))}
        else if ("+"['$===']($case)) {return (modifyText = $rb_plus(modifyText, "+1"))}
        else {return (modifyText = $rb_plus(modifyText, value))}})()}, TMP_9.$$s = self, TMP_9.$$arity = 1, TMP_9));
      return modifyText;
    }, TMP_HatsuneMiku_getChangedModifyText_10.$$arity = 1);
    
    Opal.defn(self, '$check_success', TMP_HatsuneMiku_check_success_11 = function $$check_success(total_n, dice_n, signOfInequality, diff, special_n) {
      var self = this, success = nil;

      
      if ($truthy(dice_n['$=='](1))) {
        return "ファンブル"};
      if ($truthy($rb_ge(dice_n, special_n))) {
        return "スペシャル"};
      success = self.$bcdice().$check_hit(total_n, signOfInequality, diff);
      if ($truthy($rb_ge(success, 1))) {
        return "成功"};
      return "失敗";
    }, TMP_HatsuneMiku_check_success_11.$$arity = 5);
    
    Opal.defn(self, '$getTableDiceCommandResult', TMP_HatsuneMiku_getTableDiceCommandResult_12 = function $$getTableDiceCommandResult(command) {
      var $a, $b, self = this, info = nil, name = nil, type = nil, table = nil, $case = nil, text = nil, number = nil;

      
      info = (($a = $HatsuneMiku.$$cvars['@@tables']) == null ? nil : $a)['$[]'](command);
      if ($truthy(info['$nil?']())) {
        return nil};
      name = info['$[]']("name");
      type = info['$[]']("type");
      table = info['$[]']("table");
      $b = (function() {$case = type;
      if ("2D6"['$===']($case)) {return self.$get_table_by_2d6(table)}
      else if ("1D6"['$===']($case)) {return self.$get_table_by_1d6(table)}
      else if ("D66"['$===']($case) || "D66S"['$===']($case)) {
      table = self.$getD66Table(table);
      return self.$get_table_by_d66_swap(table);}
      else {return self.$raise("" + "invaolid dice Type " + (command))}})(), $a = Opal.to_ary($b), (text = ($a[0] == null ? nil : $a[0])), (number = ($a[1] == null ? nil : $a[1])), $b;
      if ($truthy(text['$nil?']())) {
        return nil};
      return "" + (name) + "(" + (number) + ") ＞ " + (text);
    }, TMP_HatsuneMiku_getTableDiceCommandResult_12.$$arity = 1);
    
    Opal.defn(self, '$getD66Table', TMP_HatsuneMiku_getD66Table_14 = function $$getD66Table(table) {
      var TMP_13, self = this, newTable = nil;

      
      newTable = $send(table, 'map', [], (TMP_13 = function(item){var self = TMP_13.$$s || this, $a;
if (item == null) item = nil;
      if ($truthy(($truthy($a = item['$kind_of?'](Opal.const_get_relative($nesting, 'String'))) ? /^(\d+):(.*)/['$==='](item) : $a))) {
          return [(($a = $gvars['~']) === nil ? nil : $a['$[]'](1)).$to_i(), (($a = $gvars['~']) === nil ? nil : $a['$[]'](2))]
          } else {
          return item
        }}, TMP_13.$$s = self, TMP_13.$$arity = 1, TMP_13));
      if ($truthy(newTable.$size()['$!='](21))) {
        self.$raise("" + "invalid table size:" + (newTable.$size()) + "\n" + (newTable.$inspect()))};
      return newTable;
    }, TMP_HatsuneMiku_getD66Table_14.$$arity = 1);
    (Opal.class_variable_set($HatsuneMiku, '@@tables', $hash2(["FT", "CWT", "BT", "TT", "RT", "OT", "RQT", "ST", "DKT", "DNT", "HKT", "HNT", "LKT", "LNT", "EKT", "ENT", "MKT", "MNT", "OPA", "OPB", "OHT", "OLT", "OIT", "OYT", "ORT", "OMT"], {"FT": $hash2(["name", "type", "table"], {"name": "ファンブル表", "type": "1D6", "table": ["周囲から活気が失われる。黒以外のすべてのネイロを一つずつ減らす。", "仲間に迷惑をかけてしまう。自分以外のＰＣ全員の【生命力】が１点減少する。", "この失敗は後に祟るかもしれない……。自分の【生命力】が１Ｄ６点減少する。", "ココロに疲労感が満ちていく。自分がストレスを1点受ける。", "１Ｄ６を振ること。そのＰＣのコアが、その出目が１ならダークに、２ならホットに、３ならラブに、４ならエキセントリックに、５ならメランコリーに変化する。６だった場合、コアは変化しない。", "ラッキー！特に何も起こらない"]}), "CWT": $hash2(["name", "type", "table"], {"name": "致命傷表", "type": "1D6", "table": ["絶望的な攻撃を受ける。そのキャラクターは強制退出になる。", "苦痛の悲鳴をあげ、無惨にも崩れ落ちる。そのキャラクターは行動不能になる。また、黒のネイロが一つ増える。", "オトクイの一撃で、あなたは吹き飛ばされてしまう。そのキャラクターは行動不能になる。また、分類が装備のナンバーにストレスを１点受ける。", "強烈な一撃を受けて気絶する。そのキャラクターは行動不能になる。", "意識はあるが、立ち上がることができない。そのキャラクターは行動不能になる。次のシーンにまだ【生命力】が０点だった場合、自動的に１点に回復する。", "奇跡的に踏みとどまり、持ちこたえる。【生命力】が１点になる。"]}), "BT": $hash2(["name", "type", "table"], {"name": "休憩表", "type": "1D6", "table": ["仲間との楽しい時間。自分の【想い人】のパトスを一つ回復する。", "これまでの冒険を思い返す。自分の【能力値】のパトスを一つ回復する。", "自分のオトダマと会話する。【協力者】のパトスか、ナンバーのパトスを一つ回復する。", "体をゆっくり休める。自分の【生命力】を２Ｄ６点回復する。望むなら、回復を行う前に、自分の【活力】を決め直してもよい。", "お、ラッキー！いいもの見つけた！自分のコインを1枚増やす。", "ノイズストアに接続できた。各PCは、自分の【頭脳】のダイスの数と同じ個数まで、アプリを購入できる。"]}), "TT": $hash2(["name", "type", "table"], {"name": "目標表", "type": "1D6", "table": ["悪意。ＰＣの中でもっとも【生命力】の低いもの一人を目標に選ぶ。もっとも低い【生命力】の持ち主が複数いる場合、その中から、ＧＭが自由に一人目標を選ぶ。", "狡猾。パラグラフ１〜５の中で、もっとも高い数値のパラグラフにいるＰＣ一人を目標に選ぶ。全員が圏外にいる場合、圏外にいるＰＣ全員を目標に選ぶ。", "堅実。ＰＣの中で、その脅威の「判定欄」に書かれた能力値がもっとも低いランクのキャラクター一人を目標に選ぶ。もっとも低いランクのキャラクターが複数いる場合、その中から、もっとも低いモッドのキャラクター一人を目標に選ぶ。モッドも同じ値だった場合、ＧＭが自由に一人目標を選ぶ。", "豪快。ＰＣの中でもっとも高いランクの【武勇】の持ち主一人を目標に選ぶ。もっとも高いランクの持ち主が複数いる場合、その中から、もっとも高いモッドの持ち主一人を目標に選ぶ。モッドも同じ値だった場合、ＧＭが自由に一人目標を選ぶ。", "単純。パラグラフ１〜５の中で、もっとも低い数値のパラグラフにいるＰＣ一人を目標に選ぶ。全員が圏外にいる場合、圏外にいるＰＣ全員を目標に選ぶ。", "乱戦。その脅威のいるパラグラフの数値と数値が１離れたパラグラフにいるＰＣ全員を目標に選ぶ。そのパラグラフにＰＣがいなかった場合、ＧＭが自由に一人目標を選ぶ。"]}), "RT": $hash2(["name", "type", "table"], {"name": "関係表", "type": "1D6", "table": ["恋心（プラス）／殺意（マイナス）", "同情（プラス）／侮蔑（マイナス）", "憧憬（プラス）／嫉妬（マイナス）", "信頼（プラス）／疑い（マイナス）", "共感（プラス）／不気味（マイナス）", "大切（プラス）／面倒（マイナス）"]}), "OT": $hash2(["name", "type", "table"], {"name": "障害表", "type": "1D6", "table": ["あなたのココロに大きな変化が訪れる。１Ｄ６を振ること。そのＰＣのコアが、その出目が１ならダークに、２ならホットに、３ならラブに、４ならエキセントリックに、５ならメランコリーに変化する。６だった場合、コアは変化しない。", "あなたは肉体的に大きなダメージを負う。１Ｄ６点のダメージを受ける。", "ノイズの助けを借りて問題を解決する。コインを１Ｄ６枚を支払う必要がある。コインを支払う場合、ほかのPCからコインを譲ってもらってもよい。支払いが足りなかった場合、その差額分だけ自分の【生命力】を減らす。", "大きな疲労感を感じる。ストレスを１点受ける。", "思わず時間をつかってしまう。【タイム】が１点減少する。", "場にイヤな気配が満ちていく。黒のネイロが一つ増える。"]}), "RQT": $hash2(["name", "type", "table"], {"name": "リクエスト表", "type": "2D6", "table": ["そのエリアの風景が、あなたの【情景】へと書き換えられていく。「お前の始まりの物語を語れ。お前はこの地で何を思った？」", "あなたは、そのエリアの風景の中に懐かしいものを見つけ、自分の罪を思い出した。「何を見た？なにを悔いている？」", "そのエリアの風景が、あなたのコアと同じ色に染まる。あなたは、その風景の中になりたい自分の姿を見つける。「それがお前の望みか？お前は未来に何を求める？」", "あなたの脳裏に、人物欄に書かれた人物一人のイメージが浮かぶ。その人物は何かを囁き、あなたのココロが傷ついた。「そいつは誰だ？一体何と言ったのだ？」", "あなたは、そのエリアの風景の中に奇妙なものを見つけ、恐怖した。「何を見た？なぜそれを恐れる？」", "そのエリアにココロダンジョンの持ち主が現れる。その人物は、お前に質問してくる。「私をどう思ってる？なぜ、私を助ける？」", "あなたのオトダマの姿が、あなたのよく知っている人物に変わる「その人物は誰だ？そいつをどう思っている？」", "そのエリアに、あなたの持つナンバーが響き渡る。「これがお前のウタか？そのウタの名はなんだ？」", "あなたのオトダマの姿が、あなたの好きな人物の姿に変わる。「それがお前が焦がれる人物か。そいつをどうしたい？」", "そのエリアの風景にあなたの日常が浮かび上がる。「お前は何をしている？その暮らしをどう思っている？」", "あなたの目の前に、あなたの死体が横たわっている。「お前を殺すものは何だ？お前は誰に殺される？」"]}), "ST": $hash2(["name", "type", "table"], {"name": "情景表", "type": "D66", "table": ["11:立ち並ぶ本棚の森", "12:夕日が差し込む教室", "13:鳴り止まない踏切", "14:ビルから見下ろした街並み", "15:二人で見た星空", "16:液晶画面に映る奇妙な光景", "22:ガラス窓に並ぶ雨だれ", "23:植物園の温室", "24:屋台が並ぶ祭りの風景", "25:陽炎が立ちのぼるアスファルト", "26:0時を示す時計の針", "33:無機質な白い天井", "34:暗闇に浮かび上がるヘッドライト", "35:後ろからついてくる野良猫", "36:一面の花畑", "44:あなたを見つめる大勢の観衆", "45:降り積もる雪", "46:古めかしい洋館の応接間", "55:おとぎ話に出てくるような森", "56:深夜のコンビニ", "66:誰もいない体育館"]}), "DKT": $hash2(["name", "type", "table"], {"name": "ダーク・キーワード表", "type": "D66", "table": ["11:崩壊する楽園", "12:空に堕ちる", "13:優しい暴力", "14:沈黙の掟", "15:闇に溺れる", "16:こぼれ落ちた命", "22:行き止まりの絶望", "23:漆黒の翼", "24:眠れぬ夜", "25:避けられぬ運命", "26:斬り裂かれた景色", "33:からっぽな自分", "34:仮面の奥", "35:月光中毒", "36:昏い魔術", "44:……オブザデッド", "45:ココロを殺す", "46:感染する破滅", "55:愛の鎖", "56:残酷な真実", "66:デスゲーム"]}), "DNT": $hash2(["name", "type", "table"], {"name": "ダーク・名前表", "type": "D66", "table": ["11:ダーク／濁、搦　ネロ／音呂、寝路", "12:クロト／黒斗、玄徒　ヤミ／夜美、闇", "13:ネクロ／根黒、寝喰　マコ／魔子、混乎", "14:カゲオ／影男、陰夫　オニコ／鬼子、隠忍呼", "15:アクタ／芥、悪太　ホタル／蛍、歩足", "16:マオウ／魔王、万凹　ミダラ／淫、美堕裸", "22:マミヤ／魔美也、狸夜　ジャミ／邪美、蛇実", "23:ドクロ／髑髏、毒炉　ヨミ／黄泉、詠", "24:マクラ／枕、真暗　サツキ／殺鬼、五月", "25:ゲドウ／外道、戯堂　サヤ／小夜、鞘", "26:ジゴク／地獄、慈極　ウマル／埋、兎丸", "33:エンド／怨人、終　ヨハネ／夜羽、世刎", "34:ノロイ／呪、鈍　カバネ／屍、椛音", "35:アクム／悪夢、飽夢　クサリ／腐、鎖", "36:バツ／罰、×　ニエ／贄、沸", "44:ネガ／音我、願　リリス／璃々子、離里素", "45:ウツロ／虚、洞　ネタミ／妬美、寝多実", "46:ハジメ／始、創　ホロビ／滅、亡", "55:ザイン／罪印、沙陰　リンボ／淋墓、辺獄", "56:ハラワタ／腑、祓輪太　ユガミ／歪、由神", "66:イミ／忌、逝美　ムイミ／無意味、無為巳"]}), "HKT": $hash2(["name", "type", "table"], {"name": "ホット・キーワード表", "type": "D66", "table": ["11:真夜中をぶっ壊す", "12:夢を打ち上げろ", "13:譲れない明日", "14:あふれ出す衝動", "15:獣を解き放て", "16:蒸発した涙", "22:高らかに叫べ", "23:負けられない戦い", "24:握りしめた拳", "25:疾走する青春", "26:ココロに従え", "33:がんばれ", "34:そのまま進め", "35:自分の旗", "36:抗い壊し突き進む", "44:咲き誇る情熱の花", "45:暑苦しい友情", "46:オレ色に染まれ", "55:世界に八つ当たり", "56:消せない炎", "66:オーバードライブ"]}), "HNT": $hash2(["name", "type", "table"], {"name": "ホット・名前表", "type": "D66", "table": ["11:レッド／烈怒、煉集　アカネ／赤音、茜", "23:タケル／武、猛　ヒトミ／瞳、仁美", "36:ジョウ／情、丈　アオリ／煽、亜織", "12:アツシ／熱、純志　カンナ／神奈、柑菜", "24:グレン／紅蓮、九煉　ナツコ／夏子、懐子", "44:ロック／六句、麓　フォルテ／鳳流弖、彫照", "13:カケル／駆、賭　ハル／晴、春", "25:アラシ／嵐、荒　ヒカル／光、晃", "45:ヤマト／大和、岳斗　イサミ／伊佐美、勇美", "14:ガッツ／牙突、勝　アカリ／紅莉、明里", "26:エンジョウ／炎上、円定　コマチ／小町、小真知", "46:リュウセイ／流星、龍盛　ミライ／未来、美良依", "15:ケン／剣、拳　アスカ／明日香、飛鳥", "33:レツ／烈、裂　リズム／理澄、李珠夢", "55:イカル／怒、鵤　ヒマワリ／向日葵、火回", "16:ゴウ／豪、剛　ヒミコ／日美子、卑弥呼", "34:リキ／力、陸希　キョウカ／響歌、驚花", "56:ツトム／努、勉　ハナビ／花火、羽夏妃", "22:ヒイロ／火色、陽彩　アキラ／晶、爽", "35:ホムラ／焔、吠叢　カグヤ／輝夜、赫映", "66:レオ／伶央、獅王　マツリ／祭、茉莉"]}), "LKT": $hash2(["name", "type", "table"], {"name": "ラブ・キーワード表", "type": "D66", "table": ["11:大人の恋", "12:ドキドキが止まらない", "13:つないだ手", "14:世界を敵に回しても", "15:重なる声", "16:君のためなら死ねる", "22:甘い口づけ", "23:まぶたをとじて", "24:キミとボク", "25:好きとか嫌いとか", "26:いつまでも", "33:抱きしめたい", "34:75億と1千五百万人愛してる", "35:自動的な恋", "36:会いたい", "44:伝えたいコトバ", "45:ありがとう", "46:時間を止めて", "55:大好き", "56:素敵な贈り物", "66:ビューティフルワールド"]}), "LNT": $hash2(["name", "type", "table"], {"name": "ラブ・名前表", "type": "D66", "table": ["11:シアン／詩庵、思杏　アオイ／葵、蒼生", "12:ソナタ／奏名太、其方　イズミ／泉、出海", "13:ツナグ／繋、継　カレン／可憐、歌恋", "14:ミノル／実、稔　コイ／恋、鯉", "15:ユウ／優、悠　ラブ／良舞、羅步", "16:レイン／玲音、霊印　アマミ／甘味、天海", "22:ソウヤ／想夜、添也　フミ／文、芙美", "23:イトシ／糸糸、意俊　コイシ／恋志、小石", "24:エガオ／笑顔、描生　オモイ／想、念", "25:マコト／誠、真実　マナ／真菜、愛", "26:ユウリ／有理、悠里　ケイ／恵、佳", "33:チヒロ／千尋、茅紘　ウララ／麗、占", "34:トモ／友、杜望　ヒナ／雛、比奈", "35:ソラ／空、宙　ツユ／露、梅雨", "36:ユウダイ／雄大、優大　ノゾミ／望、希海", "44:ハグ／剥、抱　キス／喜好、口吻", "45:ショウタ／翔太、祥太　アイ／愛、藍", "46:ジュン／純、潤　ミサオ／美沙緒、操", "55:リョウ／涼、猟　イチズ／一途、意地図", "56:シグレ／時雨、紫暮　アオバ／青葉、碧羽", "66:ロミオ／路美雄、露澪　ロマン／浪漫、絽萬"]}), "EKT": $hash2(["name", "type", "table"], {"name": "エキセントリック・キーワード表", "type": "D66", "table": ["11:シェフのきまぐれニルヴァーナ", "23:宇宙人とデート", "36:ぷるぷる", "12:おかず食べ過ぎ", "24:まいにち寝正月", "44:夜明けのツタンカーメン", "13:バイバイバイアグラ", "25:猫がにゃー", "45:半額の宴", "14:おふとん王国の攻防", "26:道草にがい", "46:超気持ちいいなにか", "15:ぐるぐるとクルクル", "33:ブシドーロック！サムライパンク！", "55:いあ！いあ！はすたあ！", "16:ゴリラの千年王国", "34:冷やしインド", "56:小学生に貯金で負けた", "22:くもん式フランケンシュタイナー", "35:生きててよかった", "66:秒速１ポロンクセマ"]}), "ENT": $hash2(["name", "type", "table"], {"name": "エキセントリック・名前表", "type": "D66", "table": ["11:ライム／来夢、雷鵡　ミドリ／緑、美登里", "12:ランポ／乱歩、蘭舗　ビビリ／恐、美々裏", "13:シラズ／不知、調頭　ヒスイ／翡翠、陽彗", "14:ムウ／夢生、無　キノコ／茸、紀乃子", "15:ネコヒコ／猫彦、寝子日子　イヌコ／犬子、夷猫", "16:ダダ／駄々、蛇陀　キリコ／切子、霧湖", "22:イケメン／活面、逝麺　ラムネ／来夢音、螺旨", "23:キョウスケ／狂介、京助　ランマ／乱麻、爛漫", "24:ネジ／螺子、寝児　アリス／有栖、亜梨子", "25:マワル／回、環　タタミ／畳、多々実", "26:キュウ／球、Ｑ　ズキン／頭巾、厨琴", "33:サバン／沙蛮、裂卍　マニア／摩尼亜、間合", "34:カエル／帰、蛙　エリマキ／襟巻、絵里真希", "35:ナゾウ／謎宇、何造　カンノン／観音、疳暢", "36:イッキュウ／一休、逸宮　ミロク／弥勒、診録", "44:シュール／酒潤、終琉　カプリ／華降、噛布里", "45:キジン／奇人、鬼神　フシギ／不思議、節黄", "46:カブキ／歌舞伎、傾　メロン／芽論、女侖", "55:ジョーカー／冗歌、浄化　ピエロ／秘絵呂、道化師", "56:ウイロウ／外郎、初弄　マッチャ／抹茶、末耶", "66:ビックリ／吃驚、！　ハテナ／果菜、？"]}), "MKT": $hash2(["name", "type", "table"], {"name": "メランコリー・キーワード表", "type": "D66", "table": ["11:ごめんなさい", "12:甘い甘い逃避", "13:ひとりぼっち", "14:ズルい世界", "15:果たせなかった約束", "16:取り返しのつかない言葉", "22:いっそ死にたい", "23:置いてきた夢", "24:見あげた青空", "25:きみの嘘", "26:すれ違う言葉", "33:幸せだった昨日", "34:こんなはずじゃなかった", "35:別れてしまった二つの道", "36:また会えたらいいね", "44:ここではないどこか", "45:青春の終わり", "46:大好きだった膝の上", "55:誰かぼくをほめて", "56:高潔な裏切り", "66:ナルシズム"]}), "MNT": $hash2(["name", "type", "table"], {"name": "メランコリー・名前表", "type": "D66", "table": ["11:ヴァイス／灰主、唄守　マシロ／真白、万代", "12:キズ／傷、疵　ダレカ／誰香、惰麗華", "13:ユレル／揺、遊玲流　エモ／絵萌、恵面", "14:オボロ／朧、憶露　ホノカ／仄、穂乃香", "15:メロ／夢露、芽朗　シズ／静、志津", "16:ヒイラギ／柊、氷刺木　カタミ／形見、片実", "22:リネン／理然、離念　スノウ／素皇、珠瑙", "23:セツナ／切、刹那　シノブ／偲、忍", "24:ナミダ／涙、波太　カスカ／霞歌、幽", "25:ムスビ／結、息日　カコ／過去、寡子", "26:ウソ／嘘、宇曽　アイカ／哀歌、愛香", "33:ペイン／閉音、病印　ツラミ／辛美、貫実", "34:ヨリミチ／寄道、頼道　シラユキ／白雪、知由樹", "35:ヒトリ／独、一人　オトナ／音鳴、乙菜", "36:スバル／昴、透遙　ハルカ／遥、晴香", "44:バイバイ／梅云、吠々　バニラ／香子蘭、芭韮", "45:トオル／透、通　リツ／律、慄", "46:タビ／旅、足袋　チギリ／契、千切", "55:サイゴ／彩吾、最期　サクラ／桜、咲良", "56:アワレ／憐、哀　ヒメイ／悲鳴、姫衣", "66:ヘヴン／戸聞、天国　ガラス／硝子、枯州"]}), "OPA": $hash2(["name", "type", "table"], {"name": "オトダマ性格表A", "type": "D66", "table": ["11:さわやか", "12:単純", "13:目立ちたがり", "14:笑い上戸", "15:P大好き", "16:がんばり屋", "22:ひょうきん", "23:ほれっぽい", "24:勇敢", "25:好奇心旺盛", "26:優しい", "33:八方美人", "34:博愛", "35:感情的", "36:おしゃべり", "44:無鉄砲", "45:元気", "46:楽観的", "55:自信家", "56:自由", "66:好戦的"]}), "OPB": $hash2(["name", "type", "table"], {"name": "オトダマ性格表B", "type": "D66", "table": ["11:悲観的", "12:大人しい", "13:臆病", "14:クール", "15:のんき", "16:マジメ", "22:夢想家", "23:常識人", "24:サイコ", "25:おおらか", "26:平和主義者", "33:慎重", "34:合理主義者", "35:無口", "36:照れ屋", "44:おひとよし", "45:なまけもの", "46:腰が低い", "55:疑い深い", "56:謙虚", "66:嘘つき"]}), "OHT": $hash2(["name", "type", "table"], {"name": "オトダマ趣味表", "type": "D66", "table": ["11:散歩", "23:温泉", "36:オークション", "12:うわさ話", "24:ギャンブル", "44:パズル", "13:寝る", "25:動物", "45:占い", "14:読書", "26:アニメ", "46:焼き肉", "15:アイドル", "33:ガーデニング", "55:スポーツ観戦", "16:甘味", "34:漫画", "56:ゲーム", "22:飲み会", "35:ドラマ", "66:動画配信"]}), "OLT": $hash2(["name", "type", "table"], {"name": "オトダマ外見表", "type": "D66", "table": ["11:デフォルト", "12:王子様／お姫様", "13:和装", "14:獣系", "15:ゴス", "16:眼鏡", "22:スポーツ", "23:軍服", "24:天使／悪魔の羽", "44:季節イベント", "25:学生服", "26:メガホン", "33:スポーツ系", "34:パンク", "35:フォーマル", "36:ジャージ", "45:白衣", "46:童話コス", "55:バニー", "56:水着", "66:戦隊コス"]}), "OIT": $hash2(["name", "type", "table"], {"name": "オトダマ一人称表", "type": "2D6", "table": ["それがし", "おいら／あたい", "自分の名前", "おれ／あたし", "わたくし", "私", "ぼく／うち", "自分", "俺様／あたくし", "余／妾", "ミー"]}), "OYT": $hash2(["name", "type", "table"], {"name": "オトダマ呼び名表", "type": "2D6", "table": ["ユー", "（ＰＣの名前）たん／きゅん", "同志（ＰＣの名前）", "キミ", "（ＰＣの名前）くん／ちゃん", "マスター", "（ＰＣの名前）さん", "（ＰＣの名前）様", "あなた", "（ＰＣの名前）氏／女史", "（ＰＣの名前）殿"]}), "ORT": $hash2(["name", "type", "table"], {"name": "リアクション表", "type": "1D6", "table": ["オトダマの表の性格を表すセリフ", "オトダマの裏の性格を表すセリフ", "ＰＣを応援するセリフ", "ＰＣをからかうセリフ", "趣味にまつわるセリフ", "攻撃を行うときのセリフ"]}), "OMT": $hash2(["name", "type", "table"], {"name": "出会い表", "type": "2D6", "table": ["名門オトダマ使い。あなたは、代々オトダマを操る一族に生まれました。あなたには、幼い頃から相棒となるオトダマがいます。あなたは、そのオトダマと共に育ちました。", "傷ついたオトダマ。ある日、あなたは傷ついたオトダマを発見しました。意識を失い、今にも消えそうなオトダマに触れると、オトダマは意識を取り戻し、あなたを恩人と慕うようになりました。", "見えないお友達。あなたは孤独な幼年期を過ごしてきました。そのとき、あなたを導いてくれたのが、あなたのオトダマです。オトダマは、あなたに他人のココロのウタを聞き、人々を助ける術を教えてくれました。", "再生。あなたはオトクイに自分のココロのウタを食べられました。オトダマ使いに憑依したオトクイが倒されたとき、自分のココロの中から新たなオトダマが生まれました。", "愛するココロ。あなたには、子どもの頃から大好きだったウタがありました。ある日、そのウタを口ずさんでいるとき、突然、後ろから拍手の音が聞こえました。振り向くと、そこにオトダマがいました。", "動画。あなたは、動画を通じて歌を聞くのが好きでした。あるとき、聞いたことのないような素敵なウタが聞こえてきたかと思うと、画面の向こうからオトダマが飛び出してきました。", "喪失。ある日、あなたは悲劇に見舞われました。そのとき、あなたはとても大切にしていた何かを失いました。その失ったものを補うかのように、あなたの側にオトダマが現れました。", "受け継がれるウタ。あなたのオトダマは、あなたが大好きだった人の相棒だったオトダマでした。しかし、その人は悲劇に出会い、あなたの元を去りました。そのとき、あなたにオトダマを託したのです。", "謎のメール。ある日、友人からあなたの元に一通のメールが送られてきました。そのメールを開くと、不思議な音楽が流れ出し、オトダマが現れました。その友人とは、それ以来、連絡がつきません。", "封印。ある日、あなたは古いレコード屋で一曲の音盤に出会います。その音盤を再生してみると、オトダマが現れました。そして、オトダマは「封印を解いてくれたお礼に、しばらく付き合ってあげる」と言ってきました。", "一目惚れ。以前、あなたは様々な楽曲を発表していました。すると、その楽曲に一目惚れしたと言って、あなたの元にオトダマが押しかけてきました。以来、そのオトダマに付きまとわれる毎日です。"]})})));
    return self.$setPrefixes($rb_plus(["R([A-DS]|\\d+).*"], (($a = $HatsuneMiku.$$cvars['@@tables']) == null ? nil : $a).$keys()));
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
