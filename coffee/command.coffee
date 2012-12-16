class Command
  constructor:(obj) ->
    @items = obj
    @menuList = [
      back:null
      next:"次に進む"
      description:"ようこそ"
      backCommand:null
      nextCommand:1
    ,
      back:"最初の画面に戻る"
      next:"次に進む"
      description:"この画面では基本的な操作方法について解説します"
      backCommand:0
      nextCommand:2
    ,
      back:"基本的な操作方法の画面に戻る"
      next:"次に進む"
      description:"この画面では応用編について開設します"
      backCommand:1
      nextCommand:3
    ,
      back:"応用編の画面に戻る"
      next:null
      description:"アプリ起動します"
      backCommand:2
      nextCommand:null
    ]

  refresh:(selectedNumber) ->
    @items.label.text = @menuList[selectedNumber].description
    @items.backBtn.className = @menuList[selectedNumber].backCommand
    @items.nextBtn.className = @menuList[selectedNumber].nextCommand

    if @items.backBtn.className is null
      @items.backBtn.hide()
    else 
      @items.backBtn.show()
  
    if @items.nextBtn.className is null
      @items.nextBtn.hide()
    else 
      @items.nextBtn.show()
    
    return @items

    
  execute:(selectedNumber) ->
    self = @

    @items.label.text = @menuList[selectedNumber].description
    @items.backBtn.className = @menuList[selectedNumber].backCommand
    @items.nextBtn.className = @menuList[selectedNumber].nextCommand
    @items.backBtn.title = "前に戻る"
    @items.nextBtn.title = "次に進む"


    @items.nextBtn.addEventListener('click',(e) ->
      if e.source.className isnt null
        self.refresh(e.source.className)                  
    )      

    @items.backBtn.addEventListener('click',(e) ->
      if e.source.className isnt null
        self.refresh(e.source.className)                  
    )      

    win.add @items.backBtn unless @items.backBtn.title is null
    win.add @items.nextBtn unless @items.nextBtn.title is null
    win.add @items.label
    
    return win.open()

module.exports = Command
