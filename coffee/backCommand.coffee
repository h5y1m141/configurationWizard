class backCommand
  constructor:(obj) ->
    @items = obj
    
  execute:(menuList) ->
    @items.label.text    = menuList.description
    @items.backBtn.title = menuList.back    
    @items.nextBtn.title = menuList.next
    
    @items.nextBtn.addEventListener('click',(e) ->
      counter++
    )      

    @items.backBtn.addEventListener('click',(e) ->
      counter--
    )      

    
    Ti.API.info "backCommand start. counter is #{counter}"
  

module.exports = backCommand  