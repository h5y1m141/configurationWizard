class screen
  constructor:() ->
    @label = Ti.UI.createLabel

      color:"#222"
      width:250
      font: 
        fontFamily:'Helvetica Neue'
        fontSize:14
        fontWeight:'bold'
      height:80
      top:20
      left:30
      
    @backBtn = Ti.UI.createButton
      width:150
      height:30
      top:100
      left:10
      color:"#222"

      
    @nextBtn = Ti.UI.createButton
      width:150
      height:30
      top:100
      left:165
      color:"#222"

        
  editItems:(obj) ->
    @label.text    = obj.description
    @backBtn.title = obj.back    
    @nextBtn.title = obj.next
    
    items =
      label:@label
      backBtn:@backBtn
      nextBtn:@nextBtn
      
    return items
      

module.exports = screen