package com.example.models

// Import the necessary libraries and packages
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import java.io.File


@Serializable
data class KeywordData(
    val keywords: Set<String>,  // Use a set instead of a list
    val answer: String
)

@Serializable
data class QuestionData(
    val question: String,
    val answer: String
)

/**
 * Search for the top N matches among the answers based on the provided keywords.
 * @param keys Array of keywords to search for.
 * @param topN Number of top matches to return.
 * @return Array containing the top N matches or "No matches found" if no matches are found.
 */
fun search(keys: Array<String>, topN: Int = 3): Array<String> {
    // @details Variables to keep track of the best matches and their match counts
    val topMatches = mutableMapOf<String, Int>()
    try{
    val data = Json.decodeFromString<List<KeywordData>>(File("/home/hampi-rares/Desktop/CHAT_BOT/code/src/main/kotlin/com/example/models/data.json").bufferedReader().use { it.readText() })

    for (i in data) {
        var match = 0 // Making sure that all match counts are initialized to 0

        // Caching the keywords in a set for better complexity
        val keywordSet = i.keywords.toSet()

        if (keys.size >= keywordSet.size) {
            for (j in keys) {
                // Checking if the current keyword is present in the set (case-insensitive)
                if (keywordSet.any { it.equals(j, ignoreCase = true) }) {
                    match++ // If so, increment the match count
                }
            }

            // If the current match count is greater than zero, consider it as a match
            if (match > 0) {
                // Store the match count in the map with the answer as the key
                topMatches[i.answer] = match
            }
        }
    }

    // Sort the matches by match count in descending order and take the top N
    val sortedMatches = topMatches.entries.sortedByDescending { it.value }.take(topN)

    // @return Lastly, return the top N matches or a suggestive message if no matches are found
    return if (sortedMatches.isNotEmpty()) sortedMatches.map { it.key }.toTypedArray() else arrayOf("Sorry, I still have a lot to learn...")}
    catch (e: Exception) {
        return arrayOf(e.toString())
    }

    // Sort the matches by match count in descending order and take the top N
    val sortedMatches = topMatches.entries.sortedByDescending { it.value }.take(topN)

    // @return Lastly, return the top N matches or a suggestive message if no matches are found
    return if (sortedMatches.isNotEmpty()) sortedMatches.map { it.key }.toTypedArray() else arrayOf("Sorry, I still have a lot to learn...")
}

fun correctAnswer(question: String, expect_answer: String): Boolean{

    val json = Json { ignoreUnknownKeys = true }
    try {
    val data =
        json.decodeFromString<List<QuestionData>>(File("/home/hampi-rares/Desktop/CHAT_BOT/code/src/main/kotlin/com/example/models/QuestionsAndCorrectAnswer.json").bufferedReader().use { it.readText() })

    var res = false

    for (i in data) {
        if (i.question == question && i.answer == expect_answer){
            println(i.answer);
            println(i.question)
            res=true
            return true
        }
    }
    return res
    }
    catch (e: Exception) {
        return false;
    }
}

fun searchQuestion(question: String): Array<String>{
    val json = Json { ignoreUnknownKeys = true }
    try {
        val data =
            json.decodeFromString<List<QuestionData>>(File("/home/hampi-rares/Desktop/CHAT_BOT/code/src/main/kotlin/com/example/models/questions.json").bufferedReader().use { it.readText() })

        println(question)
        // get each word from the question
        val words = question.split(" ").toTypedArray()
        println(words)

        var matches: Array<String> = emptyArray();


            for (j in data){
                for(k in words){
                    if(j.question.contains(k)){
                        // add the question to the array
                        matches += j.question
                    }
                }
            }

        //return match if lenght is not 0
        return if (matches.isNotEmpty()) matches else arrayOf("Sorry, I still have a lot to learn...")
    }
    catch (e: Exception) {
        return arrayOf(e.toString())
    }
}