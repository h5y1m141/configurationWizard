class screen
  constructor:() ->
    @label = Ti.UI.createLabel
      textAlign:1
      color:"#222"
      width:300
      font: 
        fontFamily:'Helvetica Neue'
        fontSize:14
        fontWeight:'bold'
      height:80
      top:50
      left:5
      
    @backBtn = Ti.UI.createButton
      width:150
      height:30
      top:50
      left:10
      color:"#222"

      
    @nextBtn = Ti.UI.createButton
      width:150
      height:30
      top:50
      left:165
      color:"#222"
      
    @currentView = Ti.UI.createView
      width:300
      height:300
      backgroundColor:'#ededed'
      top:120
      left:10
      zIndex:1
      borderRadius:10
      
    
    @nextShowView =    
      width:300
      height:300
      backgroundColor:"#ccc"
      top:120
      left:120
      zIndex:2
      visible:false
      borderRadius:5

        
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