# Java Virtual Machine

## Introduction

Java’s main appeal is that it is portable, meaning nearly all code written with it can be compiled and ran on cross-platforms.

However, the JVM itself is not cross-platform and has to be compiled for the different platforms individually. As a result, Java installs differ between operating systems and architectures. For example, if I wanted to install Java on a Windows 11 machine with a modern AMD Ryzen desktop CPU, I would need to install a copy that is compatible with the x64 architecture and Windows operating system.

## Structure

Because of this, the Java development process includes an intermediate step between source code and machine code as machine code is not portable. The source code is fed through javac which is Java’s compiler, where bytecode is emitted as a .class file, a format specifically made for the JVM.
The JVM is split into four different components to deal with the bytecode and general runtime of Java programs.

1.	Class Loader Subsystem
2.	Runtime Data Areas
3.	Execution Engine
4.	Native Method Interface

![Structure](/diagrams/jvm_structure.png)

## Class Loader Subsystem

The class loader subsystem combines different class loaders on a program level and determines which of the loaders loads which classes allowing for custom behaviour to run before the class is loaded, and this is the loading phase. Next, the verify stage ensures the bytecode is not malformed, otherwise it could present issues that are hard to debug or outright crash the virtual machine. Once it is verified, the linking phase simply adds the class into the runtime state of the JVM while resolving references. Based on how the class is prompted to be loaded, the class could be immediately initialized, which means the code in the static `<clinit>` method can run to build the starting state of the class.

## Runtime Data Areas

The runtime data areas are memory first allocated by the JVM to store any memory that needs to be accessed during runtime. This includes:

### Components

1.	Heap: where all the Java objects reside.
2.	Method area: where definitions of class and interfaces are stored.
3.	Constant Pool: stores symbolic references for dynamic linking purposes.
4.	Thread Data Areas: Data stores per-thread.
5.	Program Counter (PC) Register: Stores address of the current method being executed.
6.	JVM Stack: stores method invocation data from return address, local variable information. These are stored per-thread.
7.	Native Method Stack: Like the JVM stack, but for native methods. Native methods are methods written in other non-JVM languages, most notably C or C++ and these are stored in different memory locations.

## Execution Engine

The execution engine has three parts:
1.	Interpreter: reads and executes bytecode instructions sequentially.
2.	Just-In-Time (JIT) Compiler: Compiles frequently ran bytecode into native instructions for faster and definitive execution.
3.	Garbage Collector: Manages memory behind the scenes by determining whether an object would be reachable or not and reclaim memory.
Lastly, the native method interface helps bridge code between Java and non-JVM code written in other languages.
