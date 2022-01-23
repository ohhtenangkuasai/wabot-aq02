let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
        let role = (user.level <= 10) ? 'Beginner'
          : ((user.level >= 10) && (user.level <= 20)) ? 'Newbie'
          : ((user.level >= 20) && (user.level <= 30)) ? 'Warrior'
          : ((user.level >= 30) && (user.level <= 40)) ? 'Elite'
          : ((user.level >= 40) && (user.level <= 50)) ? 'Master'
          : ((user.level >= 50) && (user.level <= 60)) ? 'Grand Master'
          : ((user.level >= 60) && (user.level <= 70)) ? 'Epic'
          : ((user.level >= 70) && (user.level <= 80)) ? 'Legend'
          : 'Legend'
  user.role = role
  return true
}

module.exports = handler
