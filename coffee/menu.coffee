class Menu
  constructor:(list) ->
    @commands = []
    @previous_command =  null
    @menuList = [
      back:null
      next:"次に進む"
      description:"ようこそ"
    ,
      back:"最初の画面に戻る"
      next:"次に進む"
      description:"この画面では基本的な操作方法について解説します"
    ,
      back:"基本的な操作方法の画面に戻る"
      next:"次に進む"
      description:"この画面では応用編について開設します"
    ,
      back:"応用編の画面に戻る"
      next:null
      description:"アプリ起動します"
    ]

    
  addCommands:(command) ->
    return @commands.push(command)
    
    
  run:(selectedNumber) ->
    for command in @commands
      command.execute(selectedNumber)
      
      # @previous_command = command
      # Ti.API.info "previous_command is #{@previous_command}"
      # Ti.API.info "#{@menuList[1].description}"
    

module.exports = Menu