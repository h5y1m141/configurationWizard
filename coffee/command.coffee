class Command
  constructor:(obj) ->
    @items = obj
    @menuList = [
      description:"ようこそ"
      backCommand:null
      nextCommand:1
    ,
      description:"この画面では基本的な操作方法について解説します"
      backCommand:0
      nextCommand:2
    ,
      description:"この画面では応用編について開設します"
      backCommand:1
      nextCommand:3
    ,
      description:"アプリ起動します"
      backCommand:2
      nextCommand:null
    ]
    
  moveNext:(selectedNumber) ->
    @._setValue(selectedNumber)
    @._buttonShowFlg()
          
    return @items
    
  moveBack:(selectedNumber) ->
    @._setValue(selectedNumber)
    @._buttonShowFlg()
    
    return @items
    
  execute:(selectedNumber) ->
    self = @
    
    @._setValue(selectedNumber)
    @._buttonShowFlg()
    @items.backBtn.title = "前に戻る"
    @items.nextBtn.title = "次に進む"


    @items.nextBtn.addEventListener('click',(e) ->
      if e.source.className isnt null
        self.moveNext(e.source.className)
    )      

    @items.backBtn.addEventListener('click',(e) ->
      if e.source.className isnt null
        self.moveBack(e.source.className)
    )
    
    win.add @items.backBtn unless @items.backBtn.title is null
    win.add @items.nextBtn unless @items.nextBtn.title is null
    @items.currentView.add @items.label
    win.add @items.currentView
    
    return win.open()

    
  _setValue:(selectedNumber) ->
    @items.label.text = @menuList[selectedNumber].description
    @items.nextBtn.className = @menuList[selectedNumber].nextCommand
    @items.backBtn.className = @menuList[selectedNumber].backCommand
    Ti.API.info "#{@items.backBtn.className}"
    return true
    
  _buttonShowFlg:() ->
    
    if @items.nextBtn.className is null
      @items.nextBtn.hide()
    else 
      @items.nextBtn.show()
      
    if @items.backBtn.className is null
      @items.backBtn.hide()
    else 
      @items.backBtn.show()
      

 

module.exports = Command
