var searchIndex = {};
searchIndex['pkg_config'] = {"items":[[0,"","pkg_config","A build dependency for Cargo libraries to find system artifacts through the\n`pkg-config` utility.",null,null],[3,"Config","","",null,null],[3,"Library","","",null,null],[12,"libs","","",0,null],[12,"link_paths","","",0,null],[12,"frameworks","","",0,null],[12,"framework_paths","","",0,null],[12,"include_paths","","",0,null],[5,"target_supported","","",null,{"inputs":[],"output":{"name":"bool"}}],[5,"find_library","","Simple shortcut for using all default options for finding a library.",null,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"config"}],"output":{"name":"config"}}],[11,"fmt","","",0,{"inputs":[{"name":"library"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates a new set of configuration options which are all initially set\nto \"blank\".",1,{"inputs":[{"name":"config"}],"output":{"name":"config"}}],[11,"statik","","Indicate whether the `--static` flag should be passed.",1,{"inputs":[{"name":"config"},{"name":"bool"}],"output":{"name":"config"}}],[11,"atleast_version","","Indicate that the library must be at least version `vers`.",1,{"inputs":[{"name":"config"},{"name":"str"}],"output":{"name":"config"}}],[11,"arg","","Add an argument to pass to pkg-config.",1,{"inputs":[{"name":"config"},{"name":"s"}],"output":{"name":"config"}}],[11,"find","","Run `pkg-config` to find the library `name`.",1,{"inputs":[{"name":"config"},{"name":"str"}],"output":{"name":"result"}}]],"paths":[[3,"Library"],[3,"Config"]]};
initSearch(searchIndex);
