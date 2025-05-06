# Garbage Collection

## Introduction

In Java, memory is managed automatically through a process called Garbage Collection (GC). When objects are no longer needed, the JVM reclaims their memory, freeing developers from manual memory management. However, understanding how GC works, and when it runs, is crucial for writing efficient and responsive Java programs.

This guide outlines the purpose of garbage collection and breaks down the typical stages found in modern JVM collectors.

## Why does it exist?

Java applications continuously create objects. Many of them only exist for not even a second of execution, and some stay for the whole duration of the program execution! Without GC, developers would need to manually allocate and free memory like you would in languages like C or C++, which can be error-prone and complex. GCs automate this process, but it isn’t “free”, as it typically affects performance and memory usage.

Poorly designed code can create excessive GC overhead, leading to:
    1. Increased latency
    2. Pause times (GC “stop-the-world” events, which can freeze your entire program!)
    3. Memory pressure and OutOfMemoryErrors

This is why most performance critical programs (such as those that operate in the financial world) end up using the [Epsilon GC](https://blogs.oracle.com/javamagazine/post/epsilon-the-jdks-do-nothing-garbage-collector) as it does nothing, and manage the memory themselves.

---

## Common Stages of a GC

![Garbage Collection Stages](/diagrams/gc_stages.png)

1. Eden Space

    - Where new objects are born
    - Part of the Young Generation
    - Most Java objects are short-lived and created here
    - When Eden fills up, a Minor GC is triggered

2. Survivor Spaces (0, 1)

    - Two small memory spaces used to hold live objects that survived the last GC
    - Also part of the Young Generation
    - After a Minor GC, surviving objects are copied between S0 and S1 ("ping-pong" effect)

3. Tenured Space

    - Part of the Old Generation
    - Holds long lived objects, that survived some GC cycles
    - Cleaned by a major or full GC, leads to application pauses
    - Long-standing data structures and caches will likely be here

4. Metaspace

    - Stores class metadata, method definitions, constant pools etc.
    - Replaced Permanent Space and Permanent Generation after **Java 8**
    - Located off-heap, uses native memory
    - Can grow dynamically unless restricted with options, unlike the old Permanent Generation

| Space          | Type                 | Purpose                            | GC Frequency  |
| -------------- | -------------------- | ---------------------------------- | ------------- |
| Eden Space     | Young Gen            | New object allocation              | Frequent      |
| Survivor 0 & 1 | Young Gen            | Hold surviving objects temporarily | Frequent      |
| Tenured Space  | Old Gen              | Store long-lived objects           | Less frequent |
| Metaspace      | Native (Post-Java 8) | Store class metadata               | Dynamic       |
| Permanent Gen  | Heap (Pre-Java 8)    | Store class metadata (legacy)      | Deprecated    |