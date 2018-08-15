
# Commands

- npm install -g create-react-app
- create-react-app app-name
- npm start
- gulp
- git add --all
- git commit -m 'commit msg'
- git remote add origin MY_BITBUCKET_URL
- git push origin master
- npm start
- npm test
- npm run build
- npm run eject
- initial set up: npm i -S gulp gulp-sass gulp-clean-css gulp-uglify gulp-rename gulp-changed
- npm install gulp
- npm install (dependencies in gulpfile)
- gulp (to watch scss changes)
- git init
- git add --all  
- git commit -m 'commit msg'
- git config --get remote.origin.url     //Show remote URL
- git remote add origin URL-HERE
- git push origin master   
- Sometimes you need to revert to gulp 3 as my gulpfile npms dont work with gulp 4: sudo npm install gulp@3.8.11 --save
- git status --ignored // show ignored files to upload
- If large sql files get pushed up this is the command to delete them one by one: git filter-branch --index-filter 'git rm --cached --ignore-unmatch wp-content/ai1wm-backups/localhost-kinesis-20180706-103410-370.wpress' -f
  
# Git branchimg commands         

- ```git branch develop``` (Take a new branch from working copy)
- ```git branch``` (check branch is there)
- ```git checkout``` develop (Switch to the created new branch)
- ```git commit -am "commit msg" ``` this is a commit without having to add git add all" (we are on it now, let's make changes)
- ``` git push origin develop ``` push to develop branch  
- ```git log``` (Now look at commits done)
- ```git branch master``` (lets look at the main branch, sswitch to that > You'll see this is the master version and nothing has been changed)
- ```git checkout develop``` 
- ```git checkout -b feature/new-feature``` (New way of checking out a new branch called git feature branch, below if the feature branch doesnt exist it will create it for you)
- ```git branch``` (Show all branches, If youre already on a branch and you create a new one it will use the files of the branch you were on just before)
- ```git merge```  (Merge all the branches back into the master (develop))
- ```git checkout develop``` (go to main branch develop)
- ```git merge feature/new-feature``` (git just commited its called a merge commit)
- ```git log``` (look at the latest commits)
- ```git show 6es34rs``` (lets look inside that commit to see what has changed, grab 1st seven digits of the commit code and write, it will tell you what got added and deleted there)
- Develop > Staging :we will do our testing on the new branch before merging into master
- Master > Live site : We work like this for quality review
- GITFLOW: what is it: gitflow is a plugin to make this whole branching process easier, It removes all the excessive commands and combines the branchng into a few simpler lines
- install git flow
- ```brew install git-flow``` (then cd into repo)
- ```git flow init -d``` (initiailise into the repo were working in, d for default, comments will appear, it will create the names of the default branches)
- ```git flow feature finish new-feature``` (this will merge that branch into main (develop))
- ```git push -d <remote_name> <branch_name>``` (server delete), once merged delete that branch or it becomes really messy quickly
- ```git branch -d <branch_name>``` (local delete)