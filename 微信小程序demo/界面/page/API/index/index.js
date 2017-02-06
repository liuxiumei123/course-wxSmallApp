Page({
  data: {
    menuList: [{
      name: '界面',
      opened: false,
      APIList: [{
        zhName: '设置界面标题',
        enName: 'setNavigationBarTitle',
        url: '../set-navigation-bar-title/set-navigation-bar-title'
      }, {
        zhName: '标题栏加载动画',
        enName: 'navigationBarLoading',
        url: '../navigation-bar-loading/navigation-bar-loading'
      }, {
        zhName: '页面跳转',
        enName: 'navigateTo, navigateBack, redirectTo',
        url: '../navigator/navigator'
      }, {
        zhName: '下拉刷新',
        enName: 'pullDownRefresh',
        url: '../pull-down-refresh/pull-down-refresh'
      }, {
        zhName: '消息提示框',
        enName: 'showToast',
        url: '../show-toast/show-toast'
      }, {
        zhName: '模态弹窗',
        enName: 'showModal',
        url: '../show-modal/show-modal'
      }, {
        zhName: '操作菜单',
        enName: 'showActionSheet',
        url: '../show-action-sheet/show-action-sheet'
      }, {
        zhName: '创建动画1',
        enName: 'createAnimation1',
        url: '../animation1/animation1'
      }, {
        zhName: '创建动画2',
        enName: 'createAnimation2',
        url: '../animation2/animation2'
      }]
    }]
  },
  tapMenuItem: function (e) {
    var menuItem = this.data.menuList[parseInt(e.currentTarget.id)]
    if (menuItem.url) {
      wx.navigateTo({ url: menuItem.url })
    } else {
      var changeData = {}
      var opened = menuItem.opened
      var index = parseInt(e.currentTarget.id)

      // 展开操作
      if (opened === false) {
        var openedIndex = -1
        this.data.menuList.forEach(function (menu, i) {
          if (menu.opened === true) {
            openedIndex = i
          }
        })
        if (openedIndex > -1) {
          changeData['menuList[' + openedIndex + '].opened'] = false
        }
      }

      changeData['menuList[' + index + '].opened'] = !opened
      this.setData(changeData)
    }
  }
})
