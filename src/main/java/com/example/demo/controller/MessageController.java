package com.example.demo.controller;

import com.example.demo.exceptions.NotFoundException;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
//!!!!!
//ctrl + alt + m выделяем строки и создаем метод из этих строк!!!! если хотим несколько раз что то использовать!
//!!!!

//ctrl+alt+o удалить импорты неиспользуемые
//мы будем использовать хттп
@RestController
@RequestMapping("message")//все по адресу начинающемуся месседж будет сюда кидать
public class MessageController {
    private int counter = 4;

    private List<Map<String, String>> messages = new ArrayList<Map<String, String>>() {{
        add(new HashMap<String, String>() {{ put("id", "1"); put("text", "First message"); }});
        add(new HashMap<String, String>() {{ put("id", "2"); put("text", "Second message"); }});
        add(new HashMap<String, String>() {{ put("id", "3"); put("text", "Third message"); }});
    }};

    @GetMapping
    public List<Map<String, String>> list() {
        return messages;
    }
    //при запросах месседж / какое то значение спринг будет вызывать виз метод
    @GetMapping("{id}")
    //path variable causer we in the путь вставляем айдишник
    public Map<String, String> getOne(@PathVariable String id) {
        return getMessage(id);
    }

    private Map<String, String> getMessage(@PathVariable String id) {
        return messages.stream()
                .filter(message -> message.get("id").equals(id))
                .findFirst()
                .orElseThrow(NotFoundException::new);
    }

    @PostMapping
    public Map<String, String> create(@RequestBody Map<String, String> message) {
        //получаем месседж от пользователя и добавляем новый айдишник и ложим в список месседжей
        message.put("id", String.valueOf(counter++));

        messages.add(message);

        return message;
    }
    @PutMapping("{id}")//обновляем сообщения. добавляем крч! и обновляем айдишник!!
    public Map<String, String> update(@PathVariable String id, @RequestBody Map<String, String> message) {
        Map<String, String> messageFromDb = getMessage(id);

        messageFromDb.putAll(message);
        //шобы ошибки не выскакивали
        messageFromDb.put("id", id);

        return messageFromDb;
    }
    @DeleteMapping("{id}")//delete message
    public void delete(@PathVariable String id) {
        Map<String, String> message = getMessage(id);

        messages.remove(message);
    }

}
