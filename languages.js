const languageData = [
  {
    name: "JavaScript",
    highlightClass: "javascript",
    code: `console.log("Hello, World!");`,
  },
  {
    name: "Python",
    highlightClass: "python",
    code: `print("Hello, World!")`,
  },
  {
    name: "Java",
    highlightClass: "java",
    code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
  },
  {
    name: "C",
    highlightClass: "c",
    code: `#include <stdio.h>
int main() {
   printf("Hello, World!\\n");
   return 0;
}`,
  },
  {
    name: "C++",
    highlightClass: "cpp",
    code: `#include <iostream>
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
  },
  {
    name: "C#",
    highlightClass: "csharp",
    code: `using System;
class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,
  },
  {
    name: "PHP",
    highlightClass: "php",
    code: `<?php
  echo "Hello, World!";
?>`,
  },
  {
    name: "Ruby",
    highlightClass: "ruby",
    code: `puts "Hello, World!"`,
  },
  {
    name: "Go",
    highlightClass: "go",
    code: `package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}`,
  },
  {
    name: "Swift",
    highlightClass: "swift",
    code: `print("Hello, World!")`,
  },
  {
    name: "Kotlin",
    highlightClass: "kotlin",
    code: `fun main() {
    println("Hello, World!")
}`,
  },
  {
    name: "Rust",
    highlightClass: "rust",
    code: `fn main() {
    println!("Hello, World!");
}`,
  },
  {
    name: "SQL",
    highlightClass: "sql",
    code: `SELECT 'Hello, World!';`,
  },
  {
    name: "Bash (Shell)",
    highlightClass: "bash",
    code: `echo "Hello, World!"`,
  },
  {
    name: "Perl",
    highlightClass: "perl",
    code: `print "Hello, World!\\n";`,
  },
  {
    name: "TypeScript",
    highlightClass: "typescript",
    code: `console.log("Hello, World!");`,
  },
  {
    name: "Dart",
    highlightClass: "dart",
    code: `void main() {
  print('Hello, World!');
}`,
  },
  {
    name: "Scala",
    highlightClass: "scala",
    code: `object HelloWorld {
  def main(args: Array[String]): Unit = {
    println("Hello, World!")
  }
}`,
  },
  {
    name: "Lua",
    highlightClass: "lua",
    code: `print("Hello, World!")`,
  },
  {
    name: "COBOL",
    highlightClass: "cobol",
    code: `IDENTIFICATION DIVISION.
PROGRAM-ID. HELLO-WORLD.
PROCEDURE DIVISION.
    DISPLAY "Hello, World!".
    STOP RUN.`,
  },
  {
    name: "Assembly (x86)",
    highlightClass: "asm",
    code: `section .data
    msg db "Hello, World!", 0xa
    len equ $ - msg

section .text
    global _start

_start:
    mov eax, 4      ; system call number (sys_write)
    mov ebx, 1      ; file descriptor (stdout)
    mov ecx, msg    ; message to write
    mov edx, len    ; message length
    int 0x80        ; call kernel

    mov eax, 1      ; system call number (sys_exit)
    xor ebx, ebx    ; exit code 0
    int 0x80        ; call kernel`,
  },
  {
    name: "Fortran",
    highlightClass: "fortran",
    code: `program HelloWorld
  print *, "Hello, World!"
end program HelloWorld`,
  },
  {
    name: "R",
    highlightClass: "r",
    code: `cat("Hello, World!\\n")`,
  },
  {
    name: "Haskell",
    highlightClass: "haskell",
    code: `main :: IO ()
main = putStrLn "Hello, World!"`,
  },
  {
    name: "MATLAB",
    highlightClass: "matlab",
    code: `disp('Hello, World!')`,
  },
  {
    name: "Prolog",
    highlightClass: "prolog",
    code: `:- initialization(main).
main :- write('Hello, World!'), nl, halt.`,
  },
  {
    name: "Elixir",
    highlightClass: "elixir",
    code: `IO.puts "Hello, World!"`,
  },
  {
    name: "Julia",
    highlightClass: "julia",
    code: `println("Hello, World!")`,
  },
  {
    name: "Pascal",
    highlightClass: "pascal",
    code: `program HelloWorld;
begin
  WriteLn('Hello, World!');
end.`,
  },
];
