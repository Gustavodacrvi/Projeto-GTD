

let vm = new Vue({
  el: '#app',
  data: {
    desktop: undefined,
    guest: false,
    lang: undefined,
    tempPlace: undefined,
    showPasswords: false,
    showSideBar: false,
    email: undefined,
    username: undefined,
    wrongPlace: false,
    mouseToggleIconLeaved: undefined,
    tempUsername: '',
    checked: false,
    tempOldPassword: '',
    newPassword: '',
    newConfirmPassword: '',
    newPasswordForgot: '',
    newConfirmPasswordForgot: '',
    hasPasswordError: false,
    passwordError: '',
    error: '',
    validUsername: undefined,
    validPasswords: false,
    tempUser: {
      action: {
        tag: undefined,
        title: undefined,
        description: undefined,
        place: '',
        selected: '',
        calendar: {
          time: '',
          date: '',
          validTime: undefined,
          validDate: undefined
        }
      },
      project: {
        delete: true,
        id: '',
        id2: '',
        title: '',
        selected: ''
      },
      places: []
    },
    user: undefined,
    currentSectionComponent: 'basket',
    currentOpenedUserForm: undefined,
    openedComponents: [
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    showIconGroups: false,
    openedActionContents: undefined,
    openedProjectDropdowns: undefined,
    transformActionProject: 'create-project',
    place: undefined,
    passedMaxChar: undefined,
    passedMaxCharTitle: undefined,
    passedMaxCharDesc: undefined
  },
  methods: {
      setLanguage(lang){
        this.lang = lang
        if (lang == 'en'){
          this.l = {
            lackOfNonProjectActionsBasket: `Your non-project actions with the tag "basket" will show here.</br></br>Click on the <i class='fa fa-plus icon-bif'></i> icon to add an action.`,
            lackOfProjectActionsBasket: `Your project actions with the tag "basket" will show here.</br></br>Go to the project section to create projects.`,
            nonProjectActions: `Non-project actions`,
            projectActions: `Project actions`,
            addAction: `Add action`,
            showFirstAction: `Show only first action of each project`,
            deleteAction: `Delete action`,
            editAction: `Edit action`,
            editActionTag: `Edit action tag`,
            addCreateProject: `Create/add to the project`,
            transformActionToProject: `Create a project with the same title as this action.`,
            createProject: `Create a project`,
            addActionToProject: `Add action to the project`,
            addToProject: `Add to the project`,
            lackOfNonProjectActionsNextAction: `Your non-project actions with the tag "next action" will show here.</br></br>Click on the <i class='fa fa-plus icon-bif'></i> icon to add an action.`,
            lackOfNonProjectActionsMaybe: `Your non-project actions with the tag "someday/maybe" will show here.</br></br>Click on the <i class='fa fa-plus icon-bif'></i> icon to add an action.`,
            lackOfNonProjectActionsWaiting: `Your non-project actions with the tag "waiting" will show here.</br></br>Click on the <i class='fa fa-plus icon-bif'></i> icon to add an action.`,
            lackOfProjectActionsNextAction: `Your project actions with the tag "next action" will show here.</br></br>Go to the project section to create projects.`,
            lackOfProjectActionsWaiting: `Your project actions with the tag "waiting" will show here.</br></br>Go to the project section to create projects.`,
            lackOfProjectActionsMaybe: `Your project actions with the tag "someday/maybe" will show here.</br></br>Go to the project section to create projects.`,
            waiting: `Waiting`,
            somedaymaybe: `Someday/maybe`,
            nextAction: `Next action`,
            calendar: `Calendar`,
            lackOfProjects: `All of your projects will show here.</br></br>Click on the <i class='fa fa-plus'></i> icon to create a project.`,
            deleteProject: `Delete the project`,
            editProjectTitle: `Edit the project title`,
            removeFromProject: `Remove action from the project`,
            before: `Before`,
            after: `After`,
            mon: `Mon`,
            wed: `Wed`,
            fri: `fri`,
            jan: `Jan`,
            feb: `Feb`,
            mar: `Mar`,
            apr: `Apr`,
            may: `May`,
            jun: `Jun`,
            jul: `Jul`,
            aug: `Aug`,
            sep: `Sep`,
            oct: `Oct`,
            nov: `Nov`,
            dec: `Dec`,
            lessActions: `Less actions`,
            moreActions: `More actions`,
            actions: `actions`,
            lackOfNonProjectActionsCalendar: `Your non-project actions with the tag "calendar" will show here.</br></br>Click on the <i class='fa fa-plus icon-bif'></i> icon to add an action.`,
            nonProjectActionAfter: `Your non project actions with the "calendar" tag that comes after the current year will show here.`,
            nonProjectActionBefore: `Your non project actions with the "calendar" tag that comes before the current year will show here.`,
            projectActionsCalendar: `Your project actions with the the tag "calendar" will show here.</br></br>Go to the project section to create a project.`,
            projectActionsCalendarAfter: `Your project actions with the "calendar" tag that comes after the current year will show here.`,
            projectActionsCalendarBefore: `Your project actions with the "calendar" tag that comes before the current year will show here.`,
            loggedAs: `Logged as`,
            username: `guest`,
            selectAProject: `select a project:`,
            addChangePlace: `add/change context`,
            placeSpan: `Current context:`,
            selectAPlace: `select a context:`,
            selectAnAction: `select an action:`,
            createAPlace: `Create a context`,
            deleteCurrentPlace: `Delete current context`,
            showAllProjectsDespiteOfLocation: 'Show all projects despite of location.',
            changePlaceOfAllActions: `Change context of all actions in this project`,
            changeTagOfAllActions: `Change tag of all actions in this project`,
            timeOptional: `time(optional)`,
            Sunday: `Sunday`,
            Monday: `Monday`,
            Tuesday: `Tuesday`,
            Wednesday: `Wednesday`,
            Thursday: `Thursday`,
            Friday: `Friday`,
            Saturday: `Saturday`,
          }
        } else if (lang == 'pt-BR'){
          this.l = {
            Sunday: `Domingo`,
            Monday: `Segunda`,
            Tuesday: `Terça`,
            Wednesday: `Quarta`,
            Thursday: `Quinta`,
            Friday: `Sexta`,
            Saturday: `Sábado`,
            timeOptional: `hora(opcional)`,
            changeTagOfAllActions: `Mudar a tag de todas ações neste projeto`,
            changePlaceOfAllActions: `Mudar o contexto de todas ações neste projeto`,
            showAllProjectsDespiteOfLocation: 'Mostrar todos os projetos independentemente de contexto.',
            deleteCurrentPlace: `Deletar contexto atual`,
            createAPlace: `Criar um contexto`,
            selectAnAction: `selecione uma ação:`,
            selectAPlace: `selecione um contexto:`,
            placeSpan: `Contexto atual:`,
            addChangePlace: `adicionar/mudar contexto`,
            selectAProject: `selecione um projeto:`,
            username: `convidado`,
            loggedAs: `Conectado como`,
            projectActionsCalendarBefore: `As ações que estiverem em algum projeto e que possuírem a tag "agenda" e que vierem antes do ano atual estarão aqui.`,
            projectActionsCalendarAfter: `As ações que estiverem em algum projeto e que possuírem a tag "agenda" e que vierem após o ano atual estarão aqui.`,
            projectActionsCalendar: `As ações que estiverem em algum projeto e que possuírem a tag "agenda" com o ano atual estarão aqui.</br></br>Vá para a seção projetos para criar um projeto.`,
            nonProjectActionBefore: `As ações que não estiverem em um projeto e que possuírem a tag "agenda" e que vierem antes o ano atual estarão aqui.</br></br>Clique no ícone de <i class='fa fa-plus'></i> para adicionar uma ação.`,
            nonProjectActionAfter: `As ações que não estiverem em um projeto e que possuírem a tag "agenda" e que vierem após o ano atual estarão aqui.</br></br>Clique no ícone de <i class='fa fa-plus'></i> para adicionar uma ação.`,
            lackOfNonProjectActionsCalendar: `As ações que não estiverem em algum projeto e que possuírem a tag "agenda" estarão aqui.</br></br>Clique no ícone de <i class='fa fa-plus icon-bif'></i> para adicionar uma ação.`,
            actions: `ações`,
            moreActions: `Mais ações`,
            lessActions: `Menos ações`,
            jan: `Jan`,
            feb: `Fev`,
            mar: `Mar`,
            apr: `Abr`,
            may: `Mai`,
            jun: `Jun`,
            jul: `Jul`,
            aug: `Ago`,
            sep: `Set`,
            oct: `Out`,
            nov: `Nov`,
            dec: `Dez`,
            mon: `Seg`,
            wed: `Qua`,
            fri: `Sex`,
            before: `Antes de`,
            after: `Depois de`,
            removeFromProject: `Retirar ação do projeto`,
            editProjectTitle: `Editar título do projeto`,
            deleteProject: `Deletar o projeto`,
            lackOfProjects: `Os seus projetos estarão aqui.</br></br>Clique no ícone de <i class='fa fa-plus'></i> para criar um projeto.`,
            lackOfProjectActionsWaiting: `As ações que estiverem em algum projeto e que possuírem a tag "esperando" estarão aqui.</br></br>Vá para a seção projeto para criar um projeto.`,
            lackOfNonProjectActionsWaiting: `As ações que não estiverem em algum projeto e que possuírem a tag "esperando" estarão aqui.</br></br>Clique no ícone de <i class='fa fa-plus icon-bif'></i> para adicionar uma ação.`,
            lackOfProjectActionsMaybe: `As ações que estiverem em algum projeto e que pussuírem a tag "algum dia/talvez" estarão aqui.</br></br>Vá para a seção projeto para criar um projeto.`,
            lackOfNonProjectActionsMaybe: `As ações que não estiverem em algum projeto e que pussuírem a tag "algum dia/talvez" estarão aqui.</br></br>Clique no ícone de <i class='fa fa-plus icon-bif'></i> para adicionar uma ação.`,
            addToProject: `Adicionar no projeto`,
            waiting: `Esperando`,
            somedaymaybe: `Algum dia/talvez`,
            nextAction: `Próximas ações`,
            calendar: `Agenda`,
            lackOfProjectActionsNextAction: `As ações que estiverem em algum projeto e que pussuírem a tag "próxima ação" estarão aqui.</br></br>Vá para a seção projeto para criar um projeto.`,
            lackOfNonProjectActionsNextAction: `As ações que não estiverem em algum projeto e que possuírem a tag "próxima ação" estarão aqui.</br></br>Clique no ícone de <i class='fa fa-plus icon-bif'></i> para adicionar uma ação.`,
            addActionToProject: `Adicionar ação no projeto`,
            createProject: `Criar um projeto`,
            transformActionToProject: `Criar um projeto com o mesmo título que esta ação.`,
            lackOfNonProjectActionsBasket: `As ações que não estiverem em algum projeto e que pussuírem a tag "entrada" estarão aqui.</br></br>Clique no ícone de <i class='fa fa-plus icon-bif'></i> para adicionar uma ação.`,
            lackOfProjectActionsBasket: `As ações que estiverem em algum projeto e que pussuírem a tag "entrada" estarão aqui.</br></br>Vá para a seção projeto para criar um projeto.`,
            nonProjectActions: `Ações sem projeto`,
            projectActions: `Ações de projeto`,
            addAction: `Adicionar uma ação`,
            showFirstAction: `Mostrar apenas a primeira ação de cada projeto`,
            deleteAction: `Deletar ação`,
            editAction: `Editar ação`,
            editActionTag: `Editar tag da ação`,
            addCreateProject: `Criar/adicionar no projeto`            
          }
        }
      },
    // PASSWORDS
      togglePasswordVisiblity(opened){
        (opened) ? this.displayPasswords() : this.hidePasswords()
        this.showPasswords = opened
      },
      displayPasswords(){
        let inputs = document.querySelectorAll('.passwordField')
        inputs.forEach(el => {
          el.setAttribute('type', 'text')
        })
      },
      hidePasswords(){
        let inputs = document.querySelectorAll('.passwordField')
        inputs.forEach(el => {
          el.setAttribute('type', 'password')
        })
      },
    // SIDE BAR AND DESKTOP CHECK
      checkScreenVersion(){
        let width = window.innerWidth
        if (width >= 796){
          this.desktop = true
          this.showSideBar = true
          this.applyAnimationsToUnderlineLinksEventHandler()
        }
        else{
          this.showSideBar = false
          this.desktop = false
        }
      },
      toggleSideNav(){
        this.showSideBar = !this.showSideBar
        this.applyAnimationsToUnderlineLinksEventHandler()
      },
      hideNavBar(){
        if (!this.desktop){
          this.showSideBar = false
        }
      },
      toggleIconMouseLeaved(){
        setTimeout(() => {
          if (!this.mouseToggleIconLeaved)
            this.showSideBar = false
          this.mouseToggleIconLeaved = true
        }, 20)
      },
      mouseOverSideNav(){
        if (!this.desktop){
          setTimeout(() => {
            this.showSideBar = true
            this.mouseToggleIconLeaved = true
            setTimeout(() => {
              this.mouseToggleIconLeaved = false
            }, 25)
          }, 10)
        }
      },
      changeSectionComponent(dt){
        this.currentSectionComponent = dt.compo
        let length = this.openedComponents.length
        for (let i = 0;i < length;i++)
          this.openedComponents[i] = false
        this.openedComponents[dt.i] = true
        this.applyAnimationsToUnderlineLinksEventHandler()
        this.closeActionForm()
      },
      applyAnimationsToUnderlineLinksEventHandler(){
        setTimeout(function(){
          let links = document.querySelectorAll('.underline-link')
          let func = function(){
            this.classList.add('underline-link-animation')
            this.removeEventListener('mouseover', func)
          }
          links.forEach((el) => {
            el.addEventListener('mouseover', func)
          })
        }, 10)
      },
    // UTILITY
      getIndexOfProjectThatHasTheGivenActionId(actionId){
        return this.user.projects.findIndex((el) => {
          return el.actions.some((ele) => {
            return ele == actionId
          })
        })
      },
      thereIsAtLeastOneActionInThisLocation(projectId){
        let acts = this.user.actions
        let length = acts.length
        for (let i =0;i<length;i++)
          if (acts[i].projectId == projectId && this.includesPlace(acts[i].id, this.place))
            return true
        return false
      },
      getIndexOfProjectActionThatHasTheGivenActionId(projectId, actionId){
        return this.user.projects[projectId].actions.findIndex((el) => {
          return el == actionId
        })
      },
      removeActionsFromProject(projectId){
        let pro = this.user.projects[projectId]
        let act = this.user.actions

        let length = pro.actions.length
        for (let i = 0;i < length;i++){
          delete act[pro.actions[i]].projectId
        }
      },
      getIds(arr){
        let newArr = []
        let length = arr.length
        for (let i = 0;i < length;i++)
          newArr.push(arr[i].id)
        return newArr
      },
      resetIds(arr){
        let length = arr.length
        for (let i = 0;i < length;i++)
          arr[i].id = i
      },
      displayForm(id){
        return (this.currentOpenedUserForm == id)
      },
      decreaseProjectsActionsIdsByOneThatAreBiggerThan(id){
        let pros = this.user.projects

        let length = pros.length
        for (let i = 0;i < length;i++){
          let actionsLength = pros[i].actions.length
          for (let j = 0;j < actionsLength;j++){
            if (pros[i].actions[j] > id)
              pros[i].actions[j] -= 1
          }
        }
      },
      fixChangedActionOrderInProject(oldId, newId){
        let pros = this.user.projects
        let acts = this.user.actions
        let projectId = acts[newId].projectId
        let pro = pros[projectId]
        let hasProject = (acts[newId].projectId || acts[newId].projectId == 0)

        if (hasProject){
          let length = pro.actions.length
          let changedActionId
          for (let i = 0;i < length;i++)
            if (pro.actions[i] == oldId){
              pro.actions[i] = newId
              changedActionId = i
              break
            } 

          for (let i = 0;i < length;i++){
            let id = pro.actions[i]
            if (id == newId && id < oldId && changedActionId != i){
              pro.actions[i] += 1
            } else if (id == newId && id > oldId && changedActionId != i){
              pro.actions[i] -= 1
            } else if (id > newId && id < oldId  && changedActionId != i){
              pro.actions[i] += 1
            } else if (id > oldId && id < newId  && changedActionId != i){
              pro.actions[i] -= 1
            }
          }
        }
        
        length = pros.length
        for (let i = 0;i < length;i++){
          if (hasProject && i == projectId) continue
          let actionsLength = pros[i].actions.length
          for (let j = 0;j < actionsLength;j++){
            if (pros[i].actions[j] > newId && pros[i].actions[j] < oldId){
              pros[i].actions[j] += 1
            } else if (pros[i].actions[j] > oldId && pros[i].actions[j] < newId){
              pros[i].actions[j] -= 1
            }
          }
        }
      },
      getOldAndNewPositionOfChangedAction(){
        let acts = this.user.actions
        let pros = this.user.projects
        let length = acts.length

        let oldId
        let newId
        for (let i = 0;i < length;i++){
          if (acts[i].id != i){
            if (acts[i].id - 1 == i){
              oldId = i
              break
            } else {
              newId = i
              oldId = acts[i].id
              return {old: oldId, new: newId}
            }
          }
        }

        for (let i = 0;i < length;i++){
          if (acts[i].id == oldId){
            newId = i
            return {old: oldId, new: newId}
          }
        }
        return false
      },
      getIndexOfactionThatHasTheGivenProjectIdAll(projectId){
        let acts = this.user.actions
        let length = acts.length
        let actionIds = []
        for (let i = 0;i < length;i++)
          if (acts[i].projectId == projectId)
            actionIds.push(i)
        return actionIds
      },
      updateActionsIds(){
        let pro = this.user.projects
        let act = this.user.actions

        let length = pro.length
        for (let i = 0;i < length;i++){
          let actionsLength = pro[i].actions.length
          for (let j = 0;j < actionsLength;j++){
            act[pro[i].actions[j]].projectId = pro[i].id
          }
        }
      },
      editProjectTitle(){
        let t = this.tempUser.project
        this.user.projects[t.id].title = t.title
        if (!this.guest)
          this.POSTrequest('/edit-project', 'title='+t.title+'&id='+t.id)
        this.closeActionForm()
      },
      deleteAccount(){
        this.POSTrequest("/delete-account", "username="+this.username)
        window.location.href = "/login"
      },
      deleteAccountData(){
        this.POSTrequest('/delete-data')
        let u = this.user

        u.actions = []
        u.projects = []
        u.places = []
        this.closeActionForm()
      },
      getCurrentDate(){
        let date = DateM.getCurrentDay()
        this.tempUser.action.calendar.date = date.stringify()
      },
      getFirstActionOfProjectInArray(id, tag){
        let acts = this.user.actions
        let pros = this.user.projects
        let length = acts.length
        for (let i = 0;i < length;i++)
          if (acts[i].projectId == id && acts[i].tag == tag)
            return [acts[i]]
      },
      containsAction(projectId, actionId){
        let acts = this.user.projects[projectId].actions
        let length = acts.length
        for (let i = 0;i < length;i++)
          if (acts[i] == actionId)
            return true
        return false
      },
      projectHasAtLeastOneActionOnTheTag(projectId, tag){
        let pro = this.user.projects[projectId]
        let acts = this.user.actions
        let ids = pro.actions
        let length = ids.length
        for (let i = 0;i<length;i++){
          let act = acts[ids[i]]
          if (act.tag == tag && ((this.place == 'show all') || this.includesPlace(act.id, this.place)))
            return true
        }
        return false
      },
      hasTagAction(tag){
        let act = this.user.actions
        let length = act.length
        for (let i = 0;i < length;i++)
          if (act[i].tag == tag && !act[i].projectId && act[i].projectId != 0 && ((this.place == 'show all') || this.includesPlace(act[i].id, this.place)))
            return true
        return false
      },
      thereIsAtLeastOneProjectAction(tag){
        let act = this.user.actions
        let length = act.length
        for (let i = 0;i < length;i++)
          if (act[i].projectId || act[i].projectId == 0)
            if (act[i].tag == tag && ((this.place == 'show all') || this.includesPlace(act[i].id, this.place)))
              return true
        return false
      },
      calculateIds(){
        let ids = []
        let length = this.user.actions.length
        for (let i = 0;i < length;i++)
          ids.push(this.user.actions[i].id)
        return ids
      },
    // ACTION RELATED
      invertValue(){
        this.tempUser.project.delete = !this.tempUser.project.delete
      },
      checkAvailability(){
        if (this.tempUsername != this.username && this.tempUsername != "")
          this.POSTrequestData('/check-availability', 'username='+this.tempUsername, (data) => {
            let dt = JSON.parse(data)
            this.error = ''
            this.validUsername = false
            if (dt.passedMaxChar){
              this.error = 'passed max char'
            }
            else if (dt.valid){
              this.validUsername = true
            } else {
              this.error = 'username taken'
            }
          })
      },
      changeAccountUsername(){
        if (this.checked){
          this.POSTrequestData('/change-username', 'username='+this.tempUsername, (data) => {
            location.reload()
          })

          this.checked = false
        }
      },
      checkPasswordsForgot(){
        let newp = this.newPasswordForgot
        let newc = this.newConfirmPasswordForgot

        this.hasPasswordError = false
        if (newp == '' || newc == ''){
          this.hasPasswordError = true
          this.passwordError = 'emptyFields'
        } else if (newp.length > 30 || newc.length > 30){
          this.hasPasswordError = true
          this.passwordError = 'characterLimit'
        } else if (newp != newc){
          this.hasPasswordError = true
          this.passwordError = 'PasswordsDoesntMatch'
        }
        if (!this.hasPasswordError){
          this.validPasswords = true
          this.passwordError = 'alright'
        }
      },
      checkPasswords(){
        let old = this.tempOldPassword
        let newp = this.newPassword
        let newc = this.newConfirmPassword

        this.hasPasswordError = false
        if (old == "" || newp == '' || newc == '') {
          this.hasPasswordError = true
          this.passwordError = 'emptyFields'
        } else if (old == newp){
          this.hasPasswordError = true
          this.passwordError = 'sameOldPassword'
        } else if (newp != newc){
          this.hasPasswordError = true
          this.passwordError = 'PasswordsDoesntMatch'
        } else {
          this.POSTrequestData('/check-password', 'password='+old, (data) => {
            let dt = JSON.parse(data)
            if (!dt.valid){
              this.hasPasswordError = true
              this.passwordError = 'wrongOldPassword'
            } else {
              this.passwordError = 'alright'
              this.validPasswords = true
            }
          })
        }
        if (!this.hasPasswordError){
          this.validPasswords = true
        }
      },
      changePassword(){
        if (this.validPasswords)
          this.POSTrequestData('/change-password', 'password='+this.newPassword, () => {
            window.location.replace("/login")
          })
          this.validPasswords = false
      },
      addActionToProject() {
        let rt = this
        let dt = rt.tempUser.action

        rt.user.actions[dt.id].projectId = rt.tempUser.project.id
        rt.user.projects[rt.tempUser.project.id].actions.push(dt.id)
        if (!rt.guest)
          rt.POSTrequest('/add-existing-action-project-from-action', 'actionId='+dt.id+'&projectId='+rt.tempUser.project.id)
        rt.closeActionForm()
      },
      createPlace(){
        if (this.tempPlace != 'show all'){
          this.user.places.push(this.tempPlace)

          if (!this.guest)
            this.POSTrequest('/create-place', 'place='+this.tempPlace)
          this.closeActionForm()
        }
      },
      deletePlace(){
        if (this.place != 'show all'){
          let place = this.place
          this.removePlaceFromAllActionsThatHasThePlace(place)

          this.place = 'show all'

          let length = this.user.places.length
          for (let i = 0;i < length;i++)
            if (this.user.places[i] == place)
              this.user.places.splice(i, 1)

          if (!this.guest)
            this.POSTrequest('/delete-place', 'place='+place)
        }
      },
      removePlaceFromAllActionsThatHasThePlace(place){
        let acts = this.user.actions

        let length = acts.length
        for (let i = 0;i < length;i++){
          if (acts[i].place == place)
            acts[i].place = null
        }
      },
      getUser(){
        this.GETrequest('/get-user', (data) =>{
          let dt = JSON.parse(data)
          this.user = dt.user
          this.username = dt.username
          this.email = dt.email
          let length = this.user.actions.length
          this.openedActionContents = []
          for (let i = 0;i < length;i++)
            this.openedActionContents.push(false)

          length = this.user.projects.length
          this.openedProjectDropdowns = []
          for (let i = 0;i < length;i++)
            this.openedProjectDropdowns.push(false)
        })
      },
      addAction(){
        let dt = this.tempUser.action
        let place = this.place
        if (place == 'show all') 
          this.user.actions.push({ tag: dt.tag, title: dt.title, description: dt.description, id: this.user.actions.length, place: null})
        else this.user.actions.push({ tag: dt.tag, title: dt.title, description: dt.description, id: this.user.actions.length, place: [place]})
        if (!this.guest)
          this.POSTrequest('/add-action', 'title='+dt.title+'&description='+dt.description+'&id='+(this.user.actions.length-1)+'&tag='+dt.tag+'&place='+place)
        this.closeActionForm()
      },
      editAction(){
        let dt = this.tempUser.action
        let a = this.user.actions[dt.id]
        a.title = dt.title
        a.description = dt.description
        if (!this.guest)
          this.POSTrequest('/edit-action', 'title='+dt.title+'&description='+dt.description+'&id='+dt.id)
        this.closeActionForm()
      },
      editProjectActionsTag(){
        let dt = this.tempUser
        let pro = this.user.projects[dt.project.id]
        let acts = this.user.actions

        let ids = pro.actions
        let length = ids.length
        if (dt.action.tag != 'calendar'){
          for (let i =0;i<length;i++){
            if (acts[ids[i]].tag == 'calendar')
              delete acts[ids[i]].calendar
            acts[ids[i]].tag = dt.action.tag
          }
          if (!this.guest)
            this.POSTrequest('/edit-tag-all', 'projectId='+dt.project.id+'&tag='+dt.action.tag)
        }
        else if (dt.action.calendar.validDate && dt.action.calendar.validTime){
          for (let i =0;i<length;i++){
            acts[ids[i]].tag = 'calendar'
            acts[ids[i]].calendar = {
              date: dt.action.calendar.date,
              time: dt.action.calendar.time
            }
          }
          if (!this.guest)
            this.POSTrequest('/tag-to-calendar-all', 'projectId='+dt.project.id+'&tag='+dt.action.tag+'&date='+dt.action.calendar.date+'&time='+dt.action.calendar.time)
        }
        this.closeActionForm()
      },
      editTag(){
        let dt = this.tempUser.action
        if (dt.tag != "calendar"){
          if (this.user.actions[dt.id].tag == 'calendar')
            delete this.user.actions[dt.id].calendar
          this.user.actions[dt.id].tag = dt.tag
          if (!this.guest)
            this.POSTrequest('/edit-tag', 'id='+dt.id+'&tag='+dt.tag)
          this.closeActionForm()
        } else if (dt.calendar.validDate && dt.calendar.validTime){
          this.user.actions[dt.id].tag = "calendar"
          this.user.actions[dt.id].calendar = {
            date: dt.calendar.date,
            time: dt.calendar.time
          }
          if (!this.guest)
            this.POSTrequest('/tag-to-calendar', 'id='+dt.id+'&time='+dt.calendar.time+'&date='+dt.calendar.date)
          this.closeActionForm()
        }
      },
      transformActionToProject(){
        let dt = this.tempUser
        let act = this.user.actions

        dt.project.title = act[dt.action.id].title
        let title = dt.project.title
        let delet = dt.project.delete
        if (delet){
          act.splice(dt.action.id, 1)

          this.resetIds(act)
          this.decreaseProjectsActionsIdsByOneThatAreBiggerThan(this.id)
        }
        this.user.projects.push({ id: this.user.projects.length, title: title, actions: []})
        if (!this.guest)
          this.POSTrequest('/transform-action-to-project', 'title='+title+'&actionId='+dt.action.id+'&delete='+delet)
        this.closeActionForm()
      },
      addProject(){
        let dt = this.tempUser.project
        this.user.projects.push({id: this.user.projects.length, title: dt.title, actions: []})
        if (!this.guest)
          this.POSTrequest('/add-project', 'title='+dt.title)
        this.closeActionForm()
      },
      projectCreateAndAddAction(){
        let dt = this.tempUser.action
        let length = this.user.actions.length
        let projectId = this.tempUser.project.id
        let place = this.place
        if (place == 'show all')
          this.user.actions.push({tag:'basket',id: length, title: dt.title, description: dt.description, projectId: projectId, place: null})
        else this.user.actions.push({tag:'basket',id: length, title: dt.title, description: dt.description, projectId: projectId, place: [place]})
        this.user.projects[projectId].actions.push(length)
        if (!this.guest)
          this.POSTrequest('/create-add-action-project', 'id='+length+'&title='+dt.title+'&description='+dt.description+'&projectId='+projectId+'&place='+place)
        this.closeActionForm()
      },
      parseArrayToHTTPparams(arr, arrName){
        let str = ''
        let length = arr.length
        for (let i = 0;i < length;i++){
          str += arrName+'=' + arr[i] + '&'
        }
        str = str.slice(0, -1)
        return str
      },
      saveNewProjectOrder(ids){
        this.resetIds(this.user.projects)
        this.updateActionsIds()

        if (!this.guest)
          this.POSTrequest('/save-new-project-order', this.parseArrayToHTTPparams(ids, 'a'))
      },
      saveNewActionOrder(ids){
        let obj = this.getOldAndNewPositionOfChangedAction()
        if (obj != false){
          this.resetIds(this.user.actions)
          this.fixChangedActionOrderInProject(obj.old, obj.new)

          if (!this.guest)
            this.POSTrequest('/save-new-action-order', this.parseArrayToHTTPparams(ids, 'a')+'&old='+obj.old+'&new='+obj.new)

          }
      },
      addAlreadyExistingAction(){
        if (this.id2 != ''){
          let rt = this
          let pro = rt.user.projects
          let act = rt.user.actions
          let dt = rt.tempUser.project

          pro[dt.id].actions.push(dt.id2)
          act[dt.id2].projectId = dt.id
          if (!rt.guest)
            this.POSTrequest('/add-existing-action-project', 'projectId='+dt.id+'&actionId='+dt.id2)
          rt.closeActionForm()
        }
      },
      removeActionFromProject(actionId){
        let i = this.getIndexOfProjectThatHasTheGivenActionId(actionId)
        let j = this.getIndexOfProjectActionThatHasTheGivenActionId(i, actionId)

        this.user.projects[i].actions.splice(j, 1)
        delete this.user.actions[actionId].projectId
        if (!this.guest)
          this.POSTrequest('/remove-action-from-project', 'actionId='+actionId)
      },
      editTimedAction(){
        let rt = this.$root
        let act = rt.user.actions
        let dt = rt.tempUser.action

        if (dt.calendar.validDate && dt.calendar.validTime){
          act[dt.id].title = dt.title
          act[dt.id].description = dt.description
          act[dt.id].calendar.date = dt.calendar.date
          act[dt.id].calendar.time = dt.calendar.time
          if (!rt.guest)
            rt.POSTrequest('/edit-timed-action', 'id='+dt.id+'&description='+dt.description+'&date='+dt.calendar.date+'&time='+dt.calendar.time+'&title='+dt.title)
          this.closeActionForm()
        }
      },
      editTimedTag(){
        let dt = this.tempUser.action
        let act = this.user.actions

        act[dt.id].tag = dt.tag
        delete act[dt.id].calendar

        if (!this.guest)
          this.POSTrequest('/edit-timed-tag', 'id='+dt.id+'&tag='+dt.tag)

        this.closeActionForm()
      },
    iconGroupEventHandlers(){
      let iconGroups = document.querySelectorAll('.icon-group')
      if (this.desktop){
        this.showIconGroups = true
      } else {
        this.showIconGroups = false
      }
    },
    changeActionsProjectPlace(){
      let dt = this.tempUser
      let pros = this.user.projects
      let acts = this.user.actions
      let pro = pros[dt.project.id]

      let length = pro.actions.length
      if (this.tempUser.places.length == 0){
        for (let i =0;i<length;i++)
          acts[pro.actions[i]].place = null
      }
      else
        for (let i =0;i<length;i++)
          acts[pro.actions[i]].place = this.tempUser.places
      
      if (!this.guest){
        if (this.tempUser.places.length != 0)
          this.POSTrequest('/change-places-of-all-actions', 'projectId='+dt.project.id+'&'+this.parseArrayToHTTPparams(this.tempUser.places, 'places'))
        else
          this.POSTrequest('/change-places-of-all-actions', 'projectId='+dt.project.id+'&places='+null)
      }

      this.closeActionForm()
    },
    changeActionPlace(){
      let dt = this.tempUser.action

      if (this.tempUser.places.length == 0)
        this.user.actions[dt.id].place = null
      else this.user.actions[dt.id].place = this.tempUser.places

      if (!this.guest){
        if (this.tempUser.places != 0)
          this.POSTrequest('/change-action-place', 'id='+dt.id+'&'+this.parseArrayToHTTPparams(this.tempUser.places, 'place'))
        else
          this.POSTrequest('/change-action-place', 'id='+dt.id+'&place='+null)
      }

      this.closeActionForm()
    },
    cleanTempData() {
      let u = this.tempUser
      u.action.tag = ''
      u.action.title = ''
      u.action.description = ''
      u.action.selected = undefined
      u.action.calendar.time = ''
      u.action.calendar.validTime = undefined
      u.action.calendar.validDate = undefined
      u.project.title = ''
      u.project.id = ''
      u.project.id2 = ''
      u.project.selected = ''
      this.tempPlace = undefined
      this.tempUser.places = []
    },
    openUserForm(dt, cleanData = true){
      if (cleanData) this.cleanTempData()
      this.getCurrentDate()
      this.tempUser.action.tag = dt.tag
      this.currentOpenedUserForm = dt.id
    },
    closeActionForm(){
      this.currentOpenedUserForm = undefined
      this.cleanTempData()
    },
    openActionForm(id, actionId){
      let seconds = 0
      if (id == this.currentOpenedUserForm){
        this.closeActionForm()
        seconds = 400
      }
      this.passedMaxCharTitle = false
      this.passedMaxCharDesc = false
      setTimeout(()=> {
        this.openUserForm({id: '' + id})
        this.getDataFromAction(this.user.actions[actionId])
      }, seconds)
    },
    GETrequest(route, callback){
      let xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
          callback(this.responseText)
      }
      xhttp.open('GET', route, true)
      xhttp.send()
    },
    POSTrequest(route, params) {
      let xhttp = new XMLHttpRequest()
      xhttp.open('POST', route, true)
      xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhttp.send(params)
    },
    POSTrequestData(route, params, callback){
      let xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
          callback(this.responseText)
      }
      xhttp.open('POST', route, true)
      xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhttp.send(params)
    },
    getDataFromAction(action){
      let a = this.tempUser.action
      a.title = action.title
      a.description = action.description
      a.id = action.id
      a.tag = action.tag
      if (action.calendar){
        a.calendar.date = action.calendar.date
        a.calendar.time = action.calendar.time
      }
      if (action.place == null)
        this.tempUser.places = []
      else this.tempUser.places = action.place
    },
    getDataFromProject(project){
      let t = this.tempUser.project
      t.title = project.title
      t.id = project.id
    },
    includesPlace(actionId, place){
      let places = this.user.actions[actionId].place
      if (places == null) return false
      let length = places.length
      for (let i = 0;i<length;i++)
        if (places[i] == place)
          return true
      return false
    },
    changeDropdownSate(dt){
      this.openedActionContents[dt.id] = dt.state
    },
    applyDragAndDrop(){
      let sortables = document.querySelectorAll('.sortable')
      sortables.forEach((el) => {
        new Sortable(el, {
          handle: '.draggable',
          ghostClass: 'ghost'
        })
      })
    },
    addNonProjectTimedAction(){
      let dt = this.tempUser.action
      let act = this.user.actions
      let validDate = dt.calendar.validDate
      let validTime = dt.calendar.validTime

      if (validDate && validTime){
        let length = act.length
        let place = this.place
        if (place == 'show all')
          act.push({id: length, place: null, tag: 'calendar', title: dt.title, description: dt.description, calendar: {time: dt.calendar.time, date: dt.calendar.date}})
        else act.push({id: length, place: [place], tag: 'calendar', title: dt.title, description: dt.description, calendar: {time: dt.calendar.time, date: dt.calendar.date}})

        if (!this.guest)
          this.POSTrequest('/add-timed-action', 'tag="calendar"&title='+dt.title+'&description='+dt.description+'&time='+dt.calendar.time+'&date='+dt.calendar.date+'&place='+place)
        this.closeActionForm()
      }
    },
    activateGuest(){
      this.guest = true
    },
    mayHideSideBar(){
      if (!this.desktop)
        this.showSideBar = false
    },
    saveNewPlace(place){
      if (!this.guest)
        this.POSTrequest('/save-place', 'place='+place)
    }
  },
  mounted(){
    this.getCurrentDate()
    this.place = 'show all'
    this.GETrequest('/get-place', (data)=>{
      let dt = JSON.parse(data)
      if (dt.place != undefined)
        this.place = dt.place
    })
  },
  watch: {
    currentSectionComponent(){
      if (!this.desktop){
        setTimeout(() => {
          this.showSideBar = false
        }, 50)
      }
    },
    tempUsername(){
      this.checked = false
      this.validUsername = undefined
    },
    tempOldPassword(){
      this.validPasswords = false
      this.passwordError = ''
    },
    newPassword(){
      this.validPasswords = false
      this.passwordError = ''
    },
    newConfirmPassword(){
      this.validPasswords = false
      this.passwordError = ''
    },
    newPasswordForgot(){
      this.checkPasswordsForgot()
    },
    newConfirmPasswordForgot(){
      this.checkPasswordsForgot()
    },
    saveNewPlace(place){
      this.POSTrequest('/save-place', 'place='+place)
    }
  }
})

vm.applyAnimationsToUnderlineLinksEventHandler()
vm.checkScreenVersion()
vm.iconGroupEventHandlers()
vm.applyDragAndDrop()

window.addEventListener('resize', vm.checkScreenVersion)
window.addEventListener('resize', vm.iconGroupEventHandlers)
