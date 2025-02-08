package com.example.plugins

import com.example.models.correctAnswer
import com.example.models.search
import com.example.models.searchQuestion
import com.fasterxml.jackson.databind.SerializationFeature
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import io.ktor.http.*
import io.ktor.serialization.jackson.*
import io.ktor.server.application.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.serialization.Serializable


@Serializable
data class PostData (
    val keys : Array<String>
)

fun Application.configureSerialization() {
    install(ContentNegotiation) {
        jackson {
            enable(SerializationFeature.INDENT_OUTPUT)
        }
    }
    routing {
        get("/json/jackson") {
            call.respond(mapOf("hello" to "world"))
        }
        post("/ask") {
            try {
                val post = call.receive<String>()
                println(post)
                val mapper = jacksonObjectMapper()
                val keywords: PostData = mapper.readValue(post.toString())
                val response = search(keywords.keys)
                println(keywords.keys)
                println(response)
                call.respond(status = HttpStatusCode(200, "Ok"), mapOf("answer" to response))
            }
            catch (e: Exception) {
                call.respond(status = HttpStatusCode(400, "Bad Request"), mapOf("error" to "Invalid request"))
            }
        }
        post("/quiz"){
            try {
                val post = call.receive<String>()
                val mapper = jacksonObjectMapper()
                val postMap = mapper.readValue<Map<String, String>>(post)
                val question = postMap["question"]
                val answer = postMap["answer"]
                val response = correctAnswer(question.toString() ,answer.toString())
                println(response)
                call.respond(status = HttpStatusCode(200, "Ok"), mapOf("answer" to response))
            }
            catch (e: Exception) {
                call.respond(status = HttpStatusCode(400, "Bad Request"), mapOf("error" to "Invalid request"))
            }
        }
        post("/suggest"){
            try {

                val post = call.receive<String>()
                val mapper = jacksonObjectMapper()
                val postMap = mapper.readValue<Map<String, String>>(post)
                val question = postMap["question"]
                val response = searchQuestion(question.toString())
                println(response)
                call.respond(status = HttpStatusCode(200, "Ok"), mapOf("answer" to response))
            }
            catch (e: Exception) {
                call.respond(status = HttpStatusCode(400, "Bad Request"), mapOf("error" to "Invalid request"))

            }
        }
      
    }
}
