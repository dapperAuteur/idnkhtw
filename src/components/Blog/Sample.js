// Tag Functions
async handleAddTag(p, pObj) {
  console.log(p, pObj);
  let { token, userId, userRole } = this.state.user;
  pObj.userId = userId;
  pObj.userRole = userRole;
  pObj.token = token;
  console.log(pObj);
  let newTag = await apiCalls.createPalabra(p, pObj);
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem('tag', JSON.stringify(newTag));
  } else {
    return null;
  }
  this.setState({ tag: newTag });
}

async handleDeleteBlog(p = 'tags', pObj) {
  console.log("delete blog tag");
}

async handleLoadBlogTag(p = 'tags', pObj) {
  let text = await apiCalls.getPalabra(p, pObj);
  console.log(text);
  this.setState({ text });
}

async handleLoadBlogTags() {
  let tags = await apiCalls.getPalabras('tags');
  console.log(tags);
  this.setState({ tags });
}
handleSaveTag=(params) => {
  let { p, pObj } = params;
  console.log(p);
  console.log(pObj);
  if (pObj.hasOwnProperty('_id')) {
    this.handleUpdateTag(p, pObj);
  } else {
    this.handleAddTag(p, pObj);
  }
}

async handleUpdateTag(p, pObj) {
  console.log(pObj);
  let tags;
  let { token, userId, userRole } = this.state.user;
  // let userRole = this.state.user.userRole;
  // let token = this.state.user.token;
  pObj.userId = userId;
  pObj.userRole = userRole;
  pObj.token = token;
  let updatedTag = await apiCalls.updatePalabra(p, pObj);
  // let params = p.slice(0, -1);
  const palabras = this.state.tags.map(tag => (tag._id === updatedTag._id) ? { ...tag, ...updatedTag } : tag)

  if (typeof(Storage) !== "undefined") {
    localStorage.setItem('tag', JSON.stringify(updatedTag));
    localStorage.setItem('tags', JSON.stringify(tags));
  } else {
    return null;
  }
  this.setState({
    tag: updatedTag,
    tags: tags
  });
}
