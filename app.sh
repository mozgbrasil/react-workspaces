#!/bin/bash

# https://vaneyckt.io/posts/safer_bash_scripts_with_set_euxo_pipefail/
#set -Eeuxo pipefail
# set -Eeu
# set -o pipefail # trace ERR through pipes
# set -o errtrace # trace ERR through 'time command' and other functions
# function error() {
#     local JOB="$0"      # job name
#     local LASTLINE="$1" # line of error occurrence
#     local LASTERR="$2"  # error code
#     echo "ERROR in ${JOB} : line ${LASTLINE} with exit code ${LASTERR}"
#     exit 1
# }
# trap 'error ${LINENO} ${?}' ERR

#

function setVars() {

  SOURCE_DIR=$(
    cd "$(dirname "${BASH_SOURCE[0]}")"
    pwd -P
  )
  # echo "SOURCE_DIR: $SOURCE_DIR"
  # echo "SHELL: $SHELL"
  # echo "TERM: $TERM"

  # defaults

  # https://emojipedia.org/symbols/

  BLACK='⬛ '  # Black
  RED='🟥 '    # Red
  GREEN='🟩 '  # Green
  YELLOW='🟨 ' # Yellow
  BLUE='🟦 '   # Blue
  PURPLE='🟪 ' # Purple
  BROWN='🟫 '  # Brown
  WHITE='⬜ '  # White

  RESETCOLOR='' # Text Reset

  NOW_2_FILE=$(date +%Y-%m-%d_%H-%M-%S)
  DATE_EN_US=$(date '+%Y/%m/%d %H:%M:%S')
  DATE_PT_BR=$(date '+%d/%m/%Y %H:%M:%S')

}

setVars

#

function dotenv() {
  set -a
  [ -f "$1" ] && . "$1"
  set +a
}

# https://stackoverflow.com/questions/1007538/check-if-a-function-exists-from-a-bash-script?lq=1
function function_exists() {
  local FUNCTION_NAME=$1
  [ -z "$FUNCTION_NAME" ] && return 1
  declare -F "$FUNCTION_NAME" >/dev/null 2>&1
  return $?
}

# https://unix.stackexchange.com/questions/212183/how-do-i-check-if-a-variable-exists-in-an-if-statement
# has_declare() {                  # check if variable is set at all
#   local "$@"                     # inject 'name' argument in local scope
#   declare &>/dev/null -p "$name" # return 0 when var is present
# }

function echio() {
  local MESSAGE="$1"
  local COLOR=${2:-$GREEN}
  echo -e "${COLOR}${MESSAGE}${RESETCOLOR}"
}

function fnc_before() {
  local _FUNCNAME="$1"
  echio "${_FUNCNAME} {" "$BLUE"

  # curl --request POST "https://fleep.io/hook/OLuIRi0JRt2yv5OQisX6tg" --data "${_FUNCNAME}"

  local TIMER="$2"

  if [ "$TIMER" == "timer" ]; then
    local DATE_PT_BR=$(date '+%d/%m/%Y %H:%M:%S')
    DATE_START=$DATE_PT_BR
    echio "⏰ $DATE_START >>> " "$YELLOW"
  fi
}

function fnc_after() {

  local _FUNCNAME="$1"
  local TIMER="$2"

  if [ "$TIMER" == "timer" ]; then
    local DATE_PT_BR=$(date '+%d/%m/%Y %H:%M:%S')
    local DATE_END=$DATE_PT_BR
    echio "🔶 ${_FUNCNAME}: ⏰ $DATE_START - $DATE_END" "$BROWN"
  fi

  echio "}" "$BLUE"
}

function cd_source_dir() {
  FUNCNAME=${FUNCNAME[0]}
  fnc_before ${FUNCNAME} "timer"
  #

  pwd && cd $SOURCE_DIR/ && pwd

  #
  fnc_after ${FUNCNAME} "timer"
}

# cd_source_dir

function sounds() {
  FUNCNAME=${FUNCNAME[0]}
  fnc_before ${FUNCNAME} "timer"

  #

  # find \
  #   /usr/share/sounds/ \
  #   -name "*.ogg" \
  #   -o -name "*.oga" \
  #   -o -name "*.wave" \
  #   -type f | while read ITEM; do
  #   #(echo $ITEM)
  #   (du -sh $ITEM)
  #   (paplay $ITEM)
  # done

  paplay /usr/share/sounds/gnome/default/alerts/bark.ogg

  paplay /usr/share/sounds/freedesktop/stereo/complete.oga

  #
  fnc_after ${FUNCNAME} "timer"
}

function confirm_next_step() {
  FUNCNAME=${FUNCNAME[0]}
  fnc_before ${FUNCNAME} "timer"

  #

  sounds

  read -e -p "Prosseguir [Y/n]: " -i "Y" accept

  if [ "$accept" != "Y" ]; then
    echio "Processo abortado" "$RED"
    exit
  fi

  #
  fnc_after ${FUNCNAME} "timer"
}

#

# bash -x ./action.sh hello
function hello() {
  FUNCNAME=${FUNCNAME[0]}
  fnc_before ${FUNCNAME} "timer"
  cat <<-_EOF_
https://github.com/mozgbrasil
_EOF_
  echio 'Hello World'
  #
  fnc_after ${FUNCNAME} "timer"
}

#

function list_all_args() {
  # FUNCNAME=${FUNCNAME[0]}
  # fnc_before ${FUNCNAME} "timer"
  #

  # store arguments in a special array
  args=("$@")
  # get number of elements
  ELEMENTS=${#args[@]}
  # echo each element in array
  # for loop
  for ((i = 0; i < $ELEMENTS; i++)); do
    echio "arg ${i}: ${args[${i}]} "
  done

  #
  # fnc_after ${FUNCNAME} "timer"
}

function debug_env_fleep() {
  FUNCNAME=${FUNCNAME[0]}
  fnc_before ${FUNCNAME} "timer"
  #

  ARRAY=([0]="14/06/2021 22:48:57" [1]=$1 [2]=$(pwd) [3]=$(ls) [4]=$(env))
  ARRAY=([0]="$(date +%Y-%m-%d_%H-%M-%S)" [1]=$1 [2]=$(pwd) [3]=$(ls) [4]=$(whoami) [5]=$(printenv))
  RETURN=""

  #echo "Array size: ${#ARRAY[*]}"

  #echo "Array items and indexes:"
  for index in ${!ARRAY[*]}; do
    #RETURN="${RETURN}\n"
    RETURN="${RETURN}${index}:
${ARRAY[$index]}
"
    #RETURN="${RETURN}\n"
  done

  #echo -e $RETURN
  echio $RETURN

  curl --request POST "https://fleep.io/hook/OLuIRi0JRt2yv5OQisX6tg" --data "${RETURN}"

  # curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}' https://hooks.slack.com/services/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

  #
  fnc_after ${FUNCNAME} "timer"
}

function debug_env() {
  FUNCNAME=${FUNCNAME[0]}
  fnc_before ${FUNCNAME} "timer"
  #

  # echio "hash commit" "$YELLOW"

  # echio $(git rev-parse HEAD)

  # echio "hostname" "$YELLOW"

  # hostname -I | awk '{print $1}'

  # telnet 172.19.0.100 5432

  echio "env" "$YELLOW"

  # env | sort

  echio "git" "$YELLOW"

  git --version

  echio "node" "$YELLOW"

  which node
  node --version

  echio "npm" "$YELLOW"

  which npm
  npm --version
  # npm config list
  # npm list --global
  # npm list
  # npm whoami

  echio "yarn" "$YELLOW"

  yarn -v

  echio "pwd" "$YELLOW"

  pwd

  echio "ls" "$YELLOW"

  ls

  # echio "This will output all the files that has PATH in them" "$YELLOW"

  # grep -iRl "PATH" .

  # echio "PATH" "$YELLOW"

  # echo $PATH

  #
  fnc_after ${FUNCNAME} "timer"

}

read_var() {
  VAR=$(grep $1 $2 | xargs)
  IFS="=" read -ra VAR <<<"$VAR"
  echo ${VAR[1]}
}

function command_build() {
  FUNCNAME=${FUNCNAME[0]}
  fnc_before ${FUNCNAME} "timer"
  #

  debug_env

  # debug_env_fleep

  # /bin/bash --version
  if [[ $VERCEL_GIT_REPO_OWNER ]]; then
    echio "Is Vercel 👾️"
  fi

  if [[ $DYNO ]]; then
    echio "Is Heroku 👾️"
  fi

  if [[ $VSCODE_GIT_ASKPASS_MAIN ]]; then
    echio "Is Local 🏡️"

    COMMAND_BUILD=$(read_var COMMAND_BUILD .env)
  fi

  echio "========================"
  echio "COMMAND_BUILD: $COMMAND_BUILD"
  list_all_args $@
  echio "========================"

  # FILE=Procfile
  # if test -f "$FILE"; then
  #     echio "$FILE exists"
  # else
  #     echio "$FILE not exists"
  # fi

  eval "$COMMAND_BUILD"

  # if [[ $1 == '' ]]; then
  #     echio "eval" "$PURPLE"
  #     eval "$COMMAND_BUILD"
  # else
  #     echio "Not eval"
  # fi

  #
  fnc_after ${FUNCNAME} "timer"

}

function command_start() {
  FUNCNAME=${FUNCNAME[0]}
  fnc_before ${FUNCNAME} "timer"
  #

  debug_env

  if [[ $VERCEL_GIT_REPO_OWNER ]]; then
    echio "Is Vercel 👾️"
  fi

  if [[ $DYNO ]]; then
    echio "Is Heroku 👾️"
  fi

  if [[ $VSCODE_GIT_ASKPASS_MAIN ]]; then
    echio "Is Local 🏡️"

    COMMAND_START=$(read_var COMMAND_START .env)
  fi

  echio "========================"
  echio "COMMAND_START: $COMMAND_START"
  list_all_args $@
  echio "========================"

  # FILE=Procfile
  # if test -f "$FILE"; then
  #     echio "$FILE exists"
  # else
  #     echio "$FILE not exists"
  # fi

  eval "$COMMAND_START"

  # if [[ $1 == '' ]]; then
  #     echio "eval" "$PURPLE"
  #     eval "$COMMAND_START"
  # else
  #     echio "Not eval"
  # fi

  #
  fnc_after ${FUNCNAME} "timer"
}

function command_dev() {
  FUNCNAME=${FUNCNAME[0]}
  fnc_before ${FUNCNAME} "timer"
  #

  if [[ $VERCEL_GIT_REPO_OWNER ]]; then
    echio "Is Vercel 👾️"
  fi

  if [[ $DYNO ]]; then
    echio "Is Heroku 👾️"
    yarn workspace @mozg/express-labs run dev
  else
    echio "Is Not Heroku"
  fi

  #
  fnc_after ${FUNCNAME} "timer"
}

function app_scripts_postdeploy() {
  FUNCNAME=${FUNCNAME[0]}
  fnc_before ${FUNCNAME} "timer"
  #

  debug_env

  #
  fnc_after ${FUNCNAME} "timer"
}

function app_scripts_predestroy() {
  FUNCNAME=${FUNCNAME[0]}
  fnc_before ${FUNCNAME} "timer"
  #

  debug_env

  #
  fnc_after ${FUNCNAME} "timer"
}

function app_environments_test() {
  FUNCNAME=${FUNCNAME[0]}
  fnc_before ${FUNCNAME} "timer"
  #

  debug_env

  #
  fnc_after ${FUNCNAME} "timer"
}

function procfile_release() {
  FUNCNAME=${FUNCNAME[0]}
  fnc_before ${FUNCNAME} "timer"
  #

  # Try Fix: Loop Heroku Release, por algum motivo as vezes para de ocorrrer o loop ao fazer o Deploy

  # echio "ls" "$YELLOW"

  # PATH_FILE="./packages/react-labs/build"

  # ls $PATH_FILE

  # if [ -d $PATH_FILE ]; then
  #     echo "Directory $PATH_FILE exists."
  # else
  # echo "Error: Directory $PATH_FILE does not exists."
  command_build ${FUNCNAME}
  # fi

  #
  fnc_after ${FUNCNAME} "timer"
}

function procfile_web() {
  FUNCNAME=${FUNCNAME[0]}
  fnc_before ${FUNCNAME} "timer"
  #

  command_start ${FUNCNAME}

  #
  fnc_after ${FUNCNAME} "timer"
}

function procfile_worker() {
  FUNCNAME=${FUNCNAME[0]}
  fnc_before ${FUNCNAME} "timer"
  #

  debug_env

  #
  fnc_after ${FUNCNAME} "timer"
}

function vercel_settings_git_ignored_build_step() {
  FUNCNAME=${FUNCNAME[0]}
  fnc_before ${FUNCNAME} "timer"
  #

  env | sort | grep VERCEL

  # https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel

  echo "VERCEL_ENV: $VERCEL_ENV"

  # echo "🛑 - Build cancelled"
  # exit 0

  if [[ "$VERCEL_ENV" == "production" ]]; then
    # Proceed with the build
    echo "✅ - Build can proceed"
    exit 1
  else
    # Don't build
    echo "🛑 - Build cancelled"
    exit 0
  fi

  echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

  if [[ "$VERCEL_GIT_COMMIT_REF" == "staging" || "$VERCEL_GIT_COMMIT_REF" == "main" ]]; then
    # Proceed with the build
    echo "✅ - Build can proceed"
    exit 1

  else
    # Don't build
    echo "🛑 - Build cancelled"
    exit 0
  fi

  #
  fnc_after ${FUNCNAME} "timer"
}

#

METHOD=${1}

if function_exists $METHOD; then
  $@
else
  echio "$METHOD" "$YELLOW"
fi
