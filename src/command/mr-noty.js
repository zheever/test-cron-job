
class MrNoty {
  handle(data) {
    if (typeof data === 'string') {
       try { data = JSON.parse(data); } catch(e) { data = null; }
    }
    if(!data) {
      return; 
    }
    
  }
}

module.exports = MrNoty;
