// import jsom server using required method

const jsonServer=require('json-server')

// to create server using json server

const server=jsonServer.create()

// create router

const router=jsonServer.router("db.json")

// create middleware for parse data from javascript to json data

const middleware=jsonServer.defaults()

// create port for server

const PORT=process.env.PORT || 4000


// use middleware in server

server.use(middleware)

// use router in server

server.use(router)

// to use port in server

server.listen(PORT,()=>{
    console.log("media player server started at PORT"+PORT);
})

