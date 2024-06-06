import{_ as e,a as t,b as i,c as p,d as l,e as r,f as o,g as d,h,i as c,j as g,k as u,l as k,m,n as b,o as f}from"./chunks/mips2-image-0009.DFxqnWYO.js";import{_ as y,c as E,a as s,a4 as n,j as a,o as $}from"./chunks/framework.DRnJpP2i.js";const L=JSON.parse('{"title":"MIPS","description":"","frontmatter":{},"headers":[],"relativePath":"mips.md","filePath":"mips.md"}'),v={name:"mips.md"},w=n(`<h1 id="mips" tabindex="-1"><strong>MIPS</strong> <a class="header-anchor" href="#mips" aria-label="Permalink to &quot;**MIPS**&quot;">​</a></h1><h2 id="setting-up-the-mars-code-editor" tabindex="-1"><strong>Setting up the MARS Code Editor</strong> <a class="header-anchor" href="#setting-up-the-mars-code-editor" aria-label="Permalink to &quot;**Setting up the MARS Code Editor**&quot;">​</a></h2><h3 id="introduction-to-mars-simulator" tabindex="-1"><strong>Introduction to MARS Simulator</strong> <a class="header-anchor" href="#introduction-to-mars-simulator" aria-label="Permalink to &quot;**Introduction to MARS Simulator**&quot;">​</a></h3><p>MARS simulator will be the software on which we will be running our MIPS code.</p><h4 id="setting-up-java-sdk" tabindex="-1"><strong>Setting up JAVA SDK</strong> <a class="header-anchor" href="#setting-up-java-sdk" aria-label="Permalink to &quot;**Setting up JAVA SDK**&quot;">​</a></h4><p><em><strong>(Please note this tutorial is to download SDK Ver 11)</strong></em></p><h5 id="downloading-java-sdk-on-macos" tabindex="-1"><strong>Downloading Java SDK on MacOS:</strong> <a class="header-anchor" href="#downloading-java-sdk-on-macos" aria-label="Permalink to &quot;**Downloading Java SDK on MacOS:**&quot;">​</a></h5><ol><li>Open a web browser on your macOS computer.</li><li>Go to the Oracle Java SE Downloads page at <a href="https://www.oracle.com/java/" target="_blank" rel="noreferrer">https://www.oracle.com/java/</a> technologies/javase-jdk11-downloads.html.</li><li>On the Downloads page, locate the JDK (Java Development Kit) section.</li><li>Click on the &quot;Download&quot; button for the version of Java you want to install. Make sure to select the version suitable for your macOS version (e.g., macOS x64).</li><li>You may be prompted to log in or create an Oracle account. Follow the instructions on the screen to proceed.</li><li>Once logged in, review and accept the license agreement.</li><li>On the download page, locate the macOS version and click on the provided download link.</li><li>The JDK installer package will be downloaded to your computer.</li><li>Locate the downloaded package in your Downloads folder or the folder you specified for downloads.</li><li>Double-click on the JDK installer package to launch the installation wizard.</li><li>Follow the instructions in the installation wizard to complete the installation of the Java SDK on your macOS computer.</li></ol><h5 id="downloading-java-sdk-on-windows" tabindex="-1"><strong>Downloading Java SDK on Windows:</strong> <a class="header-anchor" href="#downloading-java-sdk-on-windows" aria-label="Permalink to &quot;**Downloading Java SDK on Windows:**&quot;">​</a></h5><ol><li>Open a web browser on your Windows computer.</li><li>Go to the Oracle Java SE Downloads page at <a href="https://www.oracle.com/java/" target="_blank" rel="noreferrer">https://www.oracle.com/java/</a> technologies/javase-jdk11-downloads.html.</li><li>On the Downloads page, locate the JDK (Java Development Kit) section.</li><li>Click on the &quot;Download&quot; button for the version of Java you want to install. Make sure to select the version suitable for your Windows version (e.g., Windows x64).</li><li>You may be prompted to log in or create an Oracle account. Follow the instructions on the screen to proceed.</li><li>Once logged in, review and accept the license agreement.</li><li>On the download page, locate the Windows version and click on the provided download link.</li><li>The JDK installer executable file (e.g., jdk-11.0.x_windows-x64_bin.exe) will be downloaded to your computer.</li><li>Locate the downloaded executable file, and double-click on it to launch the installation wizard.</li><li>Follow the instructions in the installation wizard to complete the installation of the Java SDK on your Windows computer.</li></ol><h5 id="downloading-java-sdk-on-windows-1" tabindex="-1"><strong>Downloading Java SDK on Windows:</strong> <a class="header-anchor" href="#downloading-java-sdk-on-windows-1" aria-label="Permalink to &quot;**Downloading Java SDK on Windows:**&quot;">​</a></h5><ol><li>Open a web browser on your Linux computer.</li><li>Go to the Oracle Java SE Downloads page at <a href="https://www.oracle.com/java/" target="_blank" rel="noreferrer">https://www.oracle.com/java/</a> technologies/javase-jdk11-downloads.html.</li><li>On the Downloads page, locate the JDK (Java Development Kit) section.</li><li>Click on the &quot;Download&quot; button for the version of Java you want to install. Make sure to select the version suitable for your Linux distribution.</li><li>You may be prompted to log in or create an Oracle account. Follow the instructions on the screen to proceed.</li><li>Once logged in, review and accept the license agreement.</li><li>On the download page, locate the Linux version and click on the provided download link.</li><li>The JDK archive file (e.g., jdk-11.0.x_linux-x64_bin.tar.gz) will be downloaded to your computer.</li><li>Open the terminal on your Linux system. You can typically find it in the Applications menu or by using the shortcut Ctrl+Alt+T.</li><li>Navigate to the directory where you downloaded the JDK archive file. For example, if it&#39;s in the Downloads folder, you can use the following command: <code>cd ~/Downloads </code></li><li>Extract the contents of the JDK archive using the following command: <code>tar -xvzf jdk-11.0.x_linux-x64_bin</code></li></ol><h4 id="setting-up-mars-simulator" tabindex="-1"><strong>Setting Up MARS Simulator</strong> <a class="header-anchor" href="#setting-up-mars-simulator" aria-label="Permalink to &quot;**Setting Up MARS Simulator**&quot;">​</a></h4><p><em><strong>Note: Is your MARS text unreadably small? Download and use a new release Java 9 or above which contains a fix to automatically scale and size AWT and Swing components for High Dots Per Inch (HiDPI) displays on Windows and Linux.</strong></em></p><h5 id="downloading-mips-mars-simulator-on-macos" tabindex="-1"><strong>Downloading MIPS MARS Simulator on macOS:</strong> <a class="header-anchor" href="#downloading-mips-mars-simulator-on-macos" aria-label="Permalink to &quot;**Downloading MIPS MARS Simulator on macOS:**&quot;">​</a></h5><ol><li>Open a web browser on your macOS computer.</li><li>Go to the official website of MIPS MARS at [ http:// courses.missouristate.edu/kenvollmar/mars/]( http:// courses.missouristate.edu/kenvollmar/mars/).</li><li>On the homepage, click on the &quot;MARS 4.5&quot; link under the &quot;Download MARS&quot; section.</li><li>A ZIP file named &quot;mars4_5.jar.zip&quot; will be downloaded to your computer.</li><li>Locate the downloaded ZIP file in your Downloads folder or the folder you specified for downloads.</li><li>Double-click on the ZIP file to extract its contents. This will create a JAR file named &quot;mars4_5.jar&quot;.</li><li>Move the &quot;mars4_5.jar&quot; file to a suitable location on your computer, such as the Applications folder.</li><li>Open Terminal on your macOS by going to Applications &gt; Utilities &gt; Terminal.</li><li>In the Terminal window, navigate to the directory where you placed the &quot;mars4_5.jar&quot; file. For example, if you placed it in the Applications folder, you can use the following command: <code> cd/Applications</code></li><li>Once you are in the correct directory, execute the following command to run the MIPS MARS simulator: <code>java -jar mars4_5.jar</code></li><li>The MIPS MARS simulator should now launch on your macOS computer.</li></ol><h5 id="downloading-mips-mars-simulator-on-windows" tabindex="-1"><strong>Downloading MIPS MARS Simulator on Windows:</strong> <a class="header-anchor" href="#downloading-mips-mars-simulator-on-windows" aria-label="Permalink to &quot;**Downloading MIPS MARS Simulator on Windows:**&quot;">​</a></h5><ol><li>Open a web browser on your Windows computer.</li><li>Go to the official website of MIPS MARS at [<a href="http://courses.missouristate.edu/" target="_blank" rel="noreferrer">http://courses.missouristate.edu/</a> kenvollmar/mars/]([<a href="http://courses.missouristate.edu/" target="_blank" rel="noreferrer">http://courses.missouristate.edu/</a> kenvollmar/mars/])</li><li>On the homepage, click on the &quot;MARS 4.5&quot; link under the &quot;Download MARS&quot; section.</li><li>A ZIP file named &quot;mars4_5.jar.zip&quot; will be downloaded to your computer.</li><li>Locate the downloaded ZIP file in your Downloads folder or the folder you specified for downloads.</li><li>Right-click on the ZIP file and select &quot;Extract All&quot; to extract its contents. This will create a JAR file named &quot;mars4_5.jar&quot;.</li><li>Move the &quot;mars4_5.jar&quot; file to a suitable location on your computer, such as the Program Files folder.</li><li>Open the Command Prompt on your Windows computer by pressing the Windows key + R, typing &quot;cmd,&quot; and hitting Enter.</li><li>In the Command Prompt window, navigate to the directory where you placed the &quot;mars4_5.jar&quot; file. For example, if you placed it in the Program Files folder, you can use the following command: <code>cd &quot;C:\\Program Files&quot;</code></li><li>Once you are in the correct directory, execute the following command to run the MIPS MARS simulator: <code>java -jar mars4_5.jar</code></li><li>The MIPS MARS simulator should now launch on your Windows computer.</li></ol><h5 id="downloading-mips-mars-simulator-on-linux" tabindex="-1"><strong>Downloading MIPS MARS Simulator on Linux:</strong> <a class="header-anchor" href="#downloading-mips-mars-simulator-on-linux" aria-label="Permalink to &quot;**Downloading MIPS MARS Simulator on Linux:**&quot;">​</a></h5><ol><li>Open a web browser on your Linux computer.</li><li>Go to the official website of MIPS MARS at [<a href="http://courses.missouristate.edu/" target="_blank" rel="noreferrer">http://courses.missouristate.edu/</a> kenvollmar/mars/](<a href="http://courses.missouristate.edu/" target="_blank" rel="noreferrer">http://courses.missouristate.edu/</a> kenvollmar/mars/)</li><li>On the homepage, click on the &quot;MARS 4.5&quot; link under the &quot;Download MARS&quot; section.</li><li>A ZIP file named &quot;Mars4_5.jar.zip&quot; will be downloaded to your computer.</li><li>Open the terminal on your Linux system. You can typically find it in the Applications menu or by using the shortcut Ctrl+Alt+T.</li><li>Navigate to the directory where you downloaded the ZIP file. For example, if it&#39;s in the Downloads folder, you can use the following command: <code>cd ~/Downloads</code></li><li>Unzip the ZIP file using the following command: <code>unzip Mars4_5.jar.zip</code></li><li>This will extract the &quot;Mars4_5.jar&quot; file from the ZIP archive.</li><li>Move the &quot;Mars4_5.jar&quot; file to a suitable location on your computer. For instance, you can move it to the /opt directory using the following command: <code>sudo mv Mars4_5.jar /opt</code></li><li>To run the MIPS MARS simulator, open the terminal and navigate to the directory where you placed the JAR file. For example, if you moved it to the / opt directory, use the following command: <code>cd /opt</code></li><li>Execute the following command to launch the MIPS MARS simulator <code>java -jar Mars4_5.jar</code></li><li>The MIPS MARS simulator should now launch on your Linux computer.</li></ol><h3 id="mars-assembly-and-system-calls" tabindex="-1"><strong>MARS ASSEMBLY AND SYSTEM CALLS</strong> <a class="header-anchor" href="#mars-assembly-and-system-calls" aria-label="Permalink to &quot;**MARS ASSEMBLY AND SYSTEM CALLS**&quot;">​</a></h3><p>Before assembling, the environment of this simulator can be simplisticly split to three segments: the editor at the upper left where all of the code is being written, the compiler/output right beneath the editor and the list of registers that represent the &quot;CPU&quot; for our program.</p><p>After assembling (by simply pressing F3) the environment changes, with two new segments getting the position of the editor: the text segment where</p><p>i) each line of assembly code gets cleared of &quot;pseudoinstructions&quot; (we&#39;ll talk about those in a sec) at the &quot;basic&quot; column and</p><p>ii) the machine code for each instruction at the &quot;code&quot; column, and the data segment where we can have a look at a representation of the memory of a processor with little-endian order.</p><p>After assembling, we can execute our code either all at once (F5) or step by step (F7), as well as rewinding the execution several steps backwards to the back (F8).</p><p><em><strong>MARS accepts and exports files with the .asm filetype</strong></em></p><h5 id="pseudo-instructions" tabindex="-1"><strong>Pseudo instructions</strong> <a class="header-anchor" href="#pseudo-instructions" aria-label="Permalink to &quot;**Pseudo instructions**&quot;">​</a></h5><p>Before looking at the instruction set , let us look at a few pseudo instructions that’ll help you understand the IS better.</p><p><em><strong>Here&#39;s a list of useful pseudo-instructions.</strong></em></p><p><code>mov $t0, $t1</code>: Copy contents of register t1 to register t0.</p><p><code>li $s0, immed</code>: Load immediate into to register s0. The way this is translated depends on whether immed is 16 bits or 32 bits.</p><p><code>la $s0, addr</code>: Load address into to register s0.</p><p><code>lw $t0, address</code>: Load a word at address into register t0</p><p><em><strong>Given below are some standard arithmetic and logical instructions standard to the MIPS Instruction Set Architecture.</strong></em></p><p><em>**MARS provides a small set of operating system-like services through the system call (syscall) instruction **</em></p><p><em>**To request a service, a program loads the system call code into register $v0 and arguments into registers $a0~$a3 **</em></p><p><em><strong>System calls that return values put their results in register $v0</strong></em></p><h5 id="arithmetic-instructions" tabindex="-1"><strong>Arithmetic Instructions</strong> <a class="header-anchor" href="#arithmetic-instructions" aria-label="Permalink to &quot;**Arithmetic Instructions**&quot;">​</a></h5><table tabindex="0"><thead><tr><th>Instruction</th><th>Example</th><th>Meaning</th><th>Comments</th></tr></thead><tbody><tr><td>add</td><td>add $1,$2,$3</td><td>$1=$2+$3</td><td></td></tr><tr><td>subtract</td><td>sub $1,$2,$3</td><td>$1=$2-$3</td><td></td></tr><tr><td>add immediate</td><td>addi $1,$2,100</td><td>$1=$2+100</td><td>&quot;Immediate&quot; means a constant number</td></tr><tr><td>add unsigned</td><td>addu $1,$2,$3</td><td>$1=$2+$3</td><td>Values are treated as unsigned integers,not two&#39;s complement integer</td></tr><tr><td>subtract unsigned</td><td>subu $1,$2,$3</td><td>$1=$2-$3</td><td>Values are treated as unsigned integers,not two&#39;s complement integers</td></tr><tr><td>add immediate unsigned</td><td>addiu $1,$2,100</td><td>$1=$2+100</td><td>Values are treated as unsigned integers,not two&#39;s complement integers</td></tr><tr><td>multiply (without overflow)</td><td>mul $1,$2,$3</td><td>$1=$2*$3</td><td>Result is only 32 bits!</td></tr><tr><td>multiply</td><td>mult $1,$2,$3</td><td>$hi, $low=$2*$3</td><td>Upper 32 bits stored in special register <code>hi</code>. Lower 32 bits stored in special register <code>lo</code></td></tr><tr><td>divide</td><td>div $1,$2,$3</td><td>$hi,$low=$2/$3</td><td>Remainder stored in special register <code>hi</code>. Quotient stored in special register <code>lo</code></td></tr></tbody></table><h4 id="logical" tabindex="-1"><strong>Logical</strong> <a class="header-anchor" href="#logical" aria-label="Permalink to &quot;**Logical**&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Instruction</th><th>Example</th><th>Meaning</th><th>Comments</th></tr></thead><tbody><tr><td>and</td><td>and $1,$2,$3</td><td>$1=$2&amp;$3</td><td>Bitwise AND</td></tr><tr><td>or</td><td>or $1,$2,$3</td><td>$1=$2</td><td>$3</td></tr><tr><td>and immediate</td><td>andi $1,$2,100</td><td>$1=$2&amp;100</td><td>Bitwise AND with immediate value</td></tr><tr><td>or immediate</td><td>ori $1,$2,100</td><td>$1=$2</td><td>100</td></tr><tr><td>shift left logical</td><td>sll $1,$2,10</td><td>$1=$2&lt;&lt;10</td><td>Shift left by constant number of bits</td></tr><tr><td>shift right logical</td><td>srl $1,$2,10</td><td>$1=$2&gt;&gt;10</td><td>Shift right by constant number of bits</td></tr></tbody></table><h4 id="data-transfer" tabindex="-1"><strong>Data Transfer</strong> <a class="header-anchor" href="#data-transfer" aria-label="Permalink to &quot;**Data Transfer**&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Instruction</th><th>Example</th><th>Meaning</th><th>Comments</th></tr></thead><tbody><tr><td>load word</td><td>lw $1,100($2)</td><td>$1=Memory[$2+100]</td><td>Copy from memory to register</td></tr><tr><td>store word</td><td>sw $1,100($2)</td><td>Memory[$2+100]=$1</td><td>Copy from register to memory</td></tr><tr><td>load upper immediate</td><td>lui $1,100</td><td>$1=100x2^16</td><td>Load constant into upper 16 bits. Lower 16 bits are set to zero</td></tr><tr><td>load address</td><td>la $1,label</td><td>$1=Address of the label</td><td>Pseudo-instruction (provided by assembler). Loads computed address of label (not it&#39;s contents) into register</td></tr><tr><td>load immediate</td><td>li $1,100</td><td>$1=100</td><td>Pseudo instruction (provided by assembler). Loads immediate value into the register.</td></tr><tr><td>move from hi</td><td>mfhi $2</td><td>$2=hi</td><td>Copy from special register <code>hi</code> to general register</td></tr><tr><td>move from lo</td><td>mflo $2</td><td>$2=lo</td><td>Copy from special register <code>lo</code> to general register</td></tr><tr><td>load word</td><td>lw $1,100($2)</td><td>$1=Memory[$2+100]</td><td>Copy from memory to register</td></tr><tr><td>move</td><td>move $1,$2</td><td>$1=$2</td><td>Pseudo instruction (provided by assembler). Copy from register to register</td></tr></tbody></table><h4 id="conditional-branch" tabindex="-1"><strong>Conditional Branch</strong> <a class="header-anchor" href="#conditional-branch" aria-label="Permalink to &quot;**Conditional Branch**&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Instruction</th><th>Example</th><th>Meaning</th><th>Comments</th></tr></thead><tbody><tr><td>branch on equal</td><td>beq $1,$2,100</td><td>if($1==$2) go to PC+4+100</td><td>Test if registers are equal</td></tr><tr><td>branch on not equal</td><td>bne $1,$2,100</td><td>if($1!=$2) go to PC+4+100</td><td>Test if registers are not equal</td></tr><tr><td>branch on greater than</td><td>bgt $1,$2,100</td><td>if($1&gt;$2) go to PC+4+100</td><td>Pseudo-instruction</td></tr><tr><td>branch on greater than or equal</td><td>bge $1,$2,100</td><td>if($1&gt;=$2) go to PC+4+100</td><td>Pseudo-instruction</td></tr><tr><td>branch on less than</td><td>blt $1,$2,100</td><td>if($1&lt;$2) go to PC+4+100</td><td>Pseudo-instruction</td></tr><tr><td>branch on less than or equal</td><td>ble $1,$2,100</td><td>if($1&lt;=$2) go to PC+4+100</td><td>Pseudo-instruction</td></tr></tbody></table><h4 id="comparison" tabindex="-1"><strong>Comparison</strong> <a class="header-anchor" href="#comparison" aria-label="Permalink to &quot;**Comparison**&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Instruction</th><th>Example</th><th>Meaning</th><th>Comments</th></tr></thead><tbody><tr><td>set on less than</td><td>slt $s1,$s2,$s3</td><td>if($2&lt;$3) $1 = 1;else $1 = 0</td><td>Test if less than. If true set $1 to 1. Otherwise set $1 to 0.</td></tr><tr><td>set on less than immediate</td><td>slti $s1,$s2,100</td><td>if($2&lt;100) $1 = 1;else $1 = 0</td><td>Test if less than. If true set $1 to 1. Otherwise set $1 to 0.</td></tr></tbody></table><h4 id="unconditional-jump" tabindex="-1"><strong>Unconditional Jump</strong> <a class="header-anchor" href="#unconditional-jump" aria-label="Permalink to &quot;**Unconditional Jump**&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Instruction</th><th>Example</th><th>Meaning</th><th>Comments</th></tr></thead><tbody><tr><td>jump</td><td>j 1000</td><td>go to address 1000</td><td>Jump to target address</td></tr><tr><td>jump register</td><td>jr $1</td><td>go to address stored in $1</td><td>For switch procedure return</td></tr><tr><td>jump and link</td><td>jal 1000</td><td>$ra=PC+4 go to address 1000</td><td>Use when making procedure call. This saves the return address in $ra</td></tr></tbody></table><h4 id="system-calls" tabindex="-1"><strong>System Calls</strong> <a class="header-anchor" href="#system-calls" aria-label="Permalink to &quot;**System Calls**&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Service</th><th>Operation</th><th>Code(in $v0)</th><th>Arguments</th><th>Results</th></tr></thead><tbody><tr><td>print_int</td><td>Print integer number (32 bit)</td><td>1</td><td>$a0 = integer to be printed</td><td>None</td></tr><tr><td>print_float</td><td>Print floating-point number (32 bit)</td><td>2</td><td>$f12 = float to be printed</td><td>None</td></tr><tr><td>print_double</td><td>Print floating-point number (64 bit)</td><td>3</td><td>$f12 = integer to be printed</td><td>None</td></tr><tr><td>print_string</td><td>Print null-terminated character string</td><td>4</td><td>$a0 = address of string in memory</td><td>None</td></tr><tr><td>read_int</td><td>Read integer number from user</td><td>5</td><td>None</td><td>Integer returned in $v0</td></tr><tr><td>read_float</td><td>Read floating-point number from user</td><td>6 None</td><td>Float returned in $f0</td><td></td></tr><tr><td>read_double</td><td>Read double floating-point number from user</td><td>7</td><td>None</td><td>Double returned in $f0</td></tr><tr><td>read_string</td><td>Works the same as Standard Clibrary fgets()</td><td>8</td><td>$a0 = memory address of string input buffer $a1 = length of string buffer (n)</td><td>None</td></tr><tr><td>sbrk</td><td>Returns the address to a block of memory containing n additional bytes (Useful for dynamic memory allocation)</td><td>9</td><td>$a0=amount</td><td>address in $v0</td></tr><tr><td>exit</td><td>Stop program from running</td><td>10</td><td>None</td><td>None</td></tr><tr><td>print_char</td><td>Print character</td><td>11</td><td>$a0 = character to be printed</td><td>None</td></tr><tr><td>read_char</td><td>Read character from user</td><td>12</td><td>None</td><td>Char returned in $v0</td></tr><tr><td>exit2</td><td>Stops program from running and returns an integer</td><td>17</td><td>$a0 = result(integer number)</td><td>None</td></tr></tbody></table><p>The complete list of syscalls can be accessed at<br><a href="https://courses.missouristate.edu/KenVollmar/mars/Help/SyscallHelp.html" target="_blank" rel="noreferrer">https://courses.missouristate.edu/KenVollmar/mars/Help/SyscallHelp.html</a></p><h4 id="assembler-directives" tabindex="-1"><strong>Assembler Directives</strong> <a class="header-anchor" href="#assembler-directives" aria-label="Permalink to &quot;**Assembler Directives**&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Directive</th><th>Result</th></tr></thead><tbody><tr><td>.word w1, ..., wn</td><td>Store n 32-bit values in successive memory words</td></tr><tr><td>.half h1, ..., hn</td><td>Store n 16-bit values in successive memory words</td></tr><tr><td>.byte b1, ..., bn</td><td>Store n 8-bit values in successive memory words</td></tr><tr><td>.ascii str</td><td>Store the ASCII string str in memory. Strings are in double-quotes, i.e. &quot;Computer Science&quot;</td></tr><tr><td>.asciiz str</td><td>Store the ASCII string str in memory and null terminate it. Strings are in double-quotes, i.e. &quot;Computer Science&quot;</td></tr><tr><td>.space n</td><td>Leave an empty n-byte region of memory for later use</td></tr><tr><td>.align n</td><td>Align the next datum on a 2^n byte boundary. For example, .align 2 aligns the next value ona word boundary</td></tr></tbody></table><h4 id="registers" tabindex="-1"><strong>Registers</strong> <a class="header-anchor" href="#registers" aria-label="Permalink to &quot;**Registers**&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Register Number</th><th>Register Name</th><th>Description</th></tr></thead><tbody><tr><td>0</td><td>$zero</td><td>The value 0</td></tr><tr><td>2-3</td><td>$v0-$v1</td><td>Values from expression evaluation and function results</td></tr><tr><td>4-7</td><td>$a0-$a3</td><td>(arguments) First four parameters for subroutine</td></tr><tr><td>8-15, 24-25</td><td>$t0-$t9</td><td>Temporary variables</td></tr><tr><td>16-23</td><td>$s0-$s7</td><td>Saved values representing final computed results</td></tr><tr><td>31</td><td>$ra</td><td>Return address</td></tr></tbody></table><h4 id="mars-mips-assembler-simulator-tutorial" tabindex="-1"><strong>MARS(MIPS Assembler/Simulator) Tutorial</strong> <a class="header-anchor" href="#mars-mips-assembler-simulator-tutorial" aria-label="Permalink to &quot;**MARS(MIPS Assembler/Simulator) Tutorial**&quot;">​</a></h4><p><strong>1. Input the Tutorial program</strong></p><p>1.1) Open the MARS program and click from the file menu choose “File...New”. A black document will open which you can enter your assembly code into. Click “File...Save As” and save the file as “Tutorial1.asm ”.</p><p>1.2) Enter the code as shown below into the editor and save the file.</p><div class="language-v vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">v</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Program File: Tutorial1.asm </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Written by:   MoSaad </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Date Created: 10/05/2023 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Description:  Tutorial program to introduce MARS simulator  including: breakpoints, single-</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">stepping, and register and memory windows. </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">#----------------------------------------------------------- </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">#----------------------- </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Declare some constants </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">#----------------------- </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.data </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">string</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: .asciiz </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Welcome to Hardware Lab at NIT Calicut</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">string</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: .asciiz </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello World </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">string</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: .asciiz </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Loop #&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">#------------------ </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Main program body </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">#------------------ </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.text </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">main: </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li $v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">la $a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,string</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">syscall </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">la $a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,string</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">syscall </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li $t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">loop: </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li $v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">la $a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,string</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">syscall </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li $v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">move $a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,$t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">syscall </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">addi $t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,$t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bne  $t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,loop </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">#----- </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Halt  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">#----- </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li $v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">syscall</span></span></code></pre></div><img src="`+o+'"><p>1.4) From the menu, choose “Run...Assemble”. The “Mars Messages” window at the bottom of the screen will indicate if any errors occurred. No errors should occur.</p><img src="'+d+'"><p><strong>2. Simulate the tutorial program</strong></p><p>2.1) From the menu, choose “Run...Go” to execute the program. The program will execute displaying two lines of text and three iterations of a loop to the Run /IO window.</p><p>2.2) The buttons at the top of the window can be used as shortcuts for the run menu. Use the “Reset” button to reset the program, and then try tracing through the program by clicking the step button.</p><p>2.3) You can adjust the speed the program runs by moving the slider to the right of the buttons. If you have an infinite loop in your program, it may be necessary to adjust (slow down) the speed of the simulator to prevent the MARS program from crashing.</p><img src="'+h+'">',70),C=a("img",{src:e},null,-1),F=a("img",{src:t},null,-1),x=a("img",{src:i},null,-1),q=a("img",{src:p},null,-1),A=a("img",{src:l},null,-1),S=a("img",{src:r},null,-1),D=n('<p><strong>3. Using the Debugging Tools</strong></p><p>3.1) When a program does not work as expected you will need to use the debugging tools provided with the simulator.</p><p>3.2) One of the primary tools used to debug a program is setting a breakpoint. You can break before execution of an instruction by clicking on the checkbox associated with each instruction on the far left of the execute window. Set a breakpoint at the instruction: addi $t0,$t0,1</p><p>3.3) Run the program until the breakpoint by clicking “Run”. At this point in the program only the first loop iteration has been printed. (You will need to click back to the Run/IO window to see the output.)</p><p>3.4) Now use the “Trace Into” button to step through the loop that prints out the next line of text one character at a time. Step through the instructions until “Loop #2” is printed to the output window. Stop and find the value of the registers “t0” and “pc” at that point? Has the line of code that the program counter points to executed yet?</p><p>3.5) The simulator also allows you to view the memory contents. The memory window appears in the middle of the screen and is titled “Data Segment”. Remove the earlier breakpoint and add a breakpoint to line 33, “syscall”. Click the run button so that the program executes up until the new breakpoint. We are now in the code right before “Loop #” is about to be printed for the third iteration. Notice that the $a0 register is now a pointer to the address where the “Loop #” text is stored. What is the memory location the register is pointing to?</p><p>3.6) Now look in the data segment area, and find the address $a0 points to. This is the memory section where the characters of the text “Loop #” is stored. Using an ASCII table find the address where the ‘p’ in “Loop” is located?</p><p>3.7) Exercise: Can you find where the word “Welcome” is stored in the memory?</p><img src="'+c+`"><h2 id="integer-handling" tabindex="-1"><strong>Integer Handling</strong> <a class="header-anchor" href="#integer-handling" aria-label="Permalink to &quot;**Integer Handling**&quot;">​</a></h2><p>Unlike NASM where numbers are stored as characters, MIPS can store single or multiple digit integers directly. This chapter describes how to read and print integers. Basic operations in integer handling (add, sub, mul, div) will also be covered.</p><p><strong>1. Declaring an integer</strong></p><p>Integers can be declared as constants in the ‘.data’ section as shown below:</p><p><em>Code to declare constants ‘x’ and ‘y’ with values 30 and 40 respectively:</em></p><div class="language-v vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">v</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.data </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x: .word </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y: .word </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span></span></code></pre></div><p><strong>2. Loading an integer value into a register</strong></p><p>Another way of using integers in MIPS is to read their values into temporary registers using ‘I’ type instructions. The two commonly used methods of reading integer values are:</p><ol><li>Loading a value into a temporary register.</li><li>Adding the value of the zero register and any value into a temporary register.</li></ol><p><em>Code to enter integer values 5 and 10 using add and load instructions respectively into temporary registers:</em></p><div class="language-v vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">v</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.text </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">addi  $t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, $</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li $t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span></code></pre></div><p><strong>3. Reading integers as input from the user</strong></p><p>Integers can be read from the user using <em>syscall</em> (system call) instructions. The system call code for reading an integer is ‘5’. This syscall code value must be loaded into the register $v0 in order to perform its designated function. The input is then stored in $v0.</p><p><em>Code to read an integer input from the user:</em></p><div class="language-v vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">v</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.text </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li $v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">syscall</span></span></code></pre></div><p><strong>4. Printing integers</strong></p><p>Integers stored in registers can also be printed using syscall instructions. The system call code for printing an integer is ‘1’. This syscall code value must be loaded into the register $v0 in order to perform its designated function. The integer to be printed must be stored in the $a0 register.</p><p><em>Code to print the integer ‘5’ after storing it in a register:</em></p><div class="language-v vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">v</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.text </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li $a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li $v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">syscall</span></span></code></pre></div><p>We have now learnt how to store single and multi digit integers and how to print their values. We shall now combine all of these into a single program for a more robust understanding of the covered concepts.</p><p><em>Code to declare a constant x with value 10, load values 20 and 30 into two registers and read an integer value from the user and print all these values:</em></p><div class="language-v vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">v</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.data </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x: .word </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.text </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">addi $t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, $</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   #load value </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li $t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #load value </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li $v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     #read integer input</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">syscall </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">move  $t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, $v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   #move integer input </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lw $a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x     #print x </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li $v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">syscall </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">move $a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, $t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li $v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     #print value of $t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">syscall    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">move $a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, $t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   #print value of $t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li $v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">syscall </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">move $a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, $t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   #print integer input </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li $v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">syscall </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li $v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #exit program </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">syscall</span></span></code></pre></div><p><em>Output:</em><em>Assume the value ‘5’ is entered by the user as input.</em></p><div class="language-v vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">v</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1020305</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> program </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> finished</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> running </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span></span></code></pre></div><p><strong>5. Adding integers</strong></p><p>Integers can be added in two ways, either by adding fixed or immediate values to an integer value stored in a register, or by adding two integers that are both stored in registers. Both methods to add integers are demonstrated below:</p><p><em>Code to add integer values stored in registers:</em></p><div class="language-v vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">v</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.text </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">addi  $t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, $t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   #t0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">add $t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, $t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, $t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   #t2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">addi  $t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, $zero, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   #t1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">add   $t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, $zero, $t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    #t2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span></code></pre></div><p><strong>6. Subtracting integers</strong></p><p>Unlike addition, values can only be subtracted if they are stored in a register.</p><p><em>Code to subtract integer values stored in registers:</em></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.text </span></span>
<span class="line"><span>sub $t2, $t2, $t1   #t2=t2-t1    </span></span>
<span class="line"><span>sub   $t2, $zero, $t1    #t2=0-t1</span></span></code></pre></div><p><strong>7. Multiplying integers</strong></p><p>MIPS allows you to multiply the values present in two registers and stores the 32 most significant bits in the HI special register and the 32 least significant bits in the LO special register.</p><p>The value obtained in the HI and LO registers can be accessed using the mfhi and mflo instructions respectively.</p><p><em>Code to multiply two integers values and access the result after multiplication:</em></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.text </span></span>
<span class="line"><span>mult  $t0, $t1     #signed mult </span></span>
<span class="line"><span>mflo  $s0     #s0=t0*t1 </span></span>
<span class="line"><span>multu $t2, $t3    #unsigned mult  </span></span>
<span class="line"><span>mflo  $s1     #s1=t2*t3</span></span></code></pre></div><p><strong>8. Dividing integers</strong></p><p>Division in MIPS is similar to multiplication except for a key difference, the HI special register stores the remainder while the LO special register will hold the quotient of the division.</p><p><em>Code to divide to integers and access the remainder and quotient after division:</em></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.text </span></span>
<span class="line"><span>div $t1, $t2    #signed div </span></span>
<span class="line"><span>mfhi  $s0     #s0=t1%t2 </span></span>
<span class="line"><span>mflo  $s1     #s1=t1/t2 </span></span>
<span class="line"><span>divu  $t3, $t4    #unsigned div </span></span>
<span class="line"><span>mfhi  $s2     #s2=t3%t4 </span></span>
<span class="line"><span>mflo  $s3      #s3=t3/t4</span></span></code></pre></div><h3 id="points-to-note" tabindex="-1"><strong>Points To Note</strong> <a class="header-anchor" href="#points-to-note" aria-label="Permalink to &quot;**Points To Note**&quot;">​</a></h3><p><strong>1.</strong> Entering number of size larger than 32 bits The largest integer that can be entered in 32 bit space is 2,147,483,647. Entering a number larger than that results in the following error:</p><pre><code>\`\`\` Runtime exception at 0x0040002c: invalid integer input (syscall 5)\`\`\`
</code></pre><p><strong>2.</strong> Changing the value of $zero register It is not possible to change the value of the $zero register, any instructions that attempt to alter the value have no effect.</p><p><strong>3.</strong> Multiplying numbers of size 32 bits In MIPS, all integer values must be 32 bits. So if there is a valid answer, it must be contained in the lower 32 bits of the answer. Thus to implement multiplication in MIPS, the two numbers must be multiplied using the mult operator, and the valid result moved from the lo register.</p><p><strong>4.</strong> Division by zero If the divisor is zero, then the MIPS divide instructions do not compute any result in the HI and LO registers. Division by zero is ignored and no exception is produced.</p><p><strong>5.</strong> Meaning of the <em>.word</em> directive The <em>.word</em> directive allocates 4 bytes of space in the data region. The .word directive can then be given an integer value, and it will initialize the allocated space to that integer value. Be careful as it is incorrect to think of a the .word directive as a declaration for an integer, as this directive simply allocates and initializes 4 bytes of memory, it is not a data type. What is stored in this memory can be any type of data.</p><h2 id="string-operations" tabindex="-1"><strong>String Operations</strong> <a class="header-anchor" href="#string-operations" aria-label="Permalink to &quot;**String Operations**&quot;">​</a></h2><p>Strings in MIPS can be declared as constant in the <em>.data</em> part of the program. They are often stored this way so that they can be used as user prompts or to format output of a program. Strings can also be entered by the user during the runtime of the program. Both methods of using strings in MIPS will be demonstrated below.</p><p><strong>1. Entering string constants</strong></p><p>Pre-determined strings enclosed by double quotes can be declared in the <em>.data</em> section.</p><p><em>Code to store the string “enter an element:” in memory under the name “message”:</em></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.data </span></span>
<span class="line"><span>message: .asciiz “enter an element:”</span></span></code></pre></div><p><strong>2. Enter strings as input from the user</strong></p><p>To enter strings as input, the syscall code to be used is 8. Apart from that, the address of the memory space into which the string must be entered, is loaded into the $a0 register. The maximum size of the string must also be loaded into the $a1 register before performing the syscall.</p><p><em>Code to read a string as input from the user:</em></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.data </span></span>
<span class="line"><span>input: .space 100 </span></span>
<span class="line"><span>inputsize: .word 100 </span></span>
<span class="line"><span>.text </span></span>
<span class="line"><span>li $v0, 8 </span></span>
<span class="line"><span>la $a0, input </span></span>
<span class="line"><span>lw $a1, inputsize </span></span>
<span class="line"><span>syscall</span></span></code></pre></div><p><strong>3. Printing strings stored in memory</strong></p><p>To print the required string, the syscall to be used is 4. The address of the string has to be loaded into the $a0 register.</p><p><em>Code to print a string named ‘message’ stored in memory:</em></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.text </span></span>
<span class="line"><span>li $v0, 4 </span></span>
<span class="line"><span>la $a0, output </span></span>
<span class="line"><span>syscall</span></span></code></pre></div><p>We have now learnt how to declare strings constants as well as how to store strings entered by the user. We shall now write a program combining both the concepts for a more robust understanding of basic string operations.</p><p><em>Code to read a string, with prompts instructing the user:</em></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.text </span></span>
<span class="line"><span>main: </span></span>
<span class="line"><span>    # Prompt for the string to enter </span></span>
<span class="line"><span>    li $v0, 4 </span></span>
<span class="line"><span>    la $a0, prompt </span></span>
<span class="line"><span>    syscall </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    # Read the string.  </span></span>
<span class="line"><span>    li $v0, 8 </span></span>
<span class="line"><span>    la $a0, input </span></span>
<span class="line"><span>    lw $a1, inputSize  </span></span>
<span class="line"><span>    syscall </span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>    # Output the text </span></span>
<span class="line"><span>    li $v0, 4 </span></span>
<span class="line"><span>    la $a0, output </span></span>
<span class="line"><span>    syscall</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Output the number </span></span>
<span class="line"><span>    li $v0, 4 </span></span>
<span class="line"><span>    la $a0, input </span></span>
<span class="line"><span>    syscall </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    # Exit the program </span></span>
<span class="line"><span>    li $v0, 10 </span></span>
<span class="line"><span>    syscall </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>.data </span></span>
<span class="line"><span>input:        .space 81 </span></span>
<span class="line"><span>inputSize:    .word 80 </span></span>
<span class="line"><span>prompt:       .asciiz &quot;Please enter a string: &quot; </span></span>
<span class="line"><span>output:       .asciiz &quot;\\nYou typed the string: &quot;</span></span></code></pre></div><h3 id="points-to-note-1" tabindex="-1"><strong>Points To Note</strong> <a class="header-anchor" href="#points-to-note-1" aria-label="Permalink to &quot;**Points To Note**&quot;">​</a></h3><ul><li><p>The <em>.space</em> directive allocates n bytes of memory in the data region of the program, where n=81 in this program. Since the size of a character is 1 byte, this is equivalent to saving 80 characters for data. 81 was used here because in MIPS a sequence of ASCII characters is terminated by a null value (byte containing 0). This is known as a null terminator.</p></li><li><p>If the string the user enters is larger than the maximum size of the string, it is truncated to the maximum size. This is to prevent the program from accessing memory not allocated to the string.</p></li></ul><h2 id="floating-point-numbers" tabindex="-1"><strong>Floating Point Numbers</strong> <a class="header-anchor" href="#floating-point-numbers" aria-label="Permalink to &quot;**Floating Point Numbers**&quot;">​</a></h2><p>Floating point numbers are stored according to the IEEE 754 Standard. There are 2 types of floating point numbers, single precision and double precision.</p><h3 id="floating-point-number-representation" tabindex="-1"><strong>Floating point number representation</strong> <a class="header-anchor" href="#floating-point-number-representation" aria-label="Permalink to &quot;**Floating point number representation**&quot;">​</a></h3><p>According to IEE 754 Standard, floating point numbers follow the given representation.</p><p><code>Sign Exponent Fraction</code></p><ul><li><p>The sign bit is 0 or 1, for positive or negative respectively.</p></li><li><p>The exponent stores the exponent of the number in scientific notation of its binary representation, plus a bias.</p></li><li><p>The fraction stores the fractional part of the binary representation of the number.</p></li></ul><table tabindex="0"><thead><tr><th>Data</th><th>Single Precision</th><th>Double Precision</th></tr></thead><tbody><tr><td>Size</td><td>32 bits</td><td>64 bits</td></tr><tr><td>Exponent size</td><td>8 bits</td><td>11 bits</td></tr><tr><td>Fraction size</td><td>23 bits</td><td>52 bits</td></tr><tr><td>Bias</td><td>127</td><td>1023</td></tr></tbody></table><p><u>Note</u></p><ul><li>Since there are some numbers with non-ending decimal part in there binary representation ( For Example- ( 1 /3) 10 = (0.01 0011 0011 0011 ....) 2 ) and we have only limited bits to store the fraction part, there will be some slight inaccuracy while storing certain floating point numbers. Therefore, it is recommended to always use double, as it has a higher precision due to its increased no. of bits.</li></ul><h3 id="mips-floating-point-architecture" tabindex="-1"><strong>MIPS floating point architecture</strong> <a class="header-anchor" href="#mips-floating-point-architecture" aria-label="Permalink to &quot;**MIPS floating point architecture**&quot;">​</a></h3><p>In MIPS, all floating point calculations are computed in a separate processor, called co- processor 1.</p><p>The coprocessor contains 32 floating point registers, each of width 32 bits. The registers are numbered from $f 0 to $f3 1.</p><p>Each register is can store a single precision floating point number, while double precision is stored in 2 registers in an even-odd pair. For instructions concerning double precision numbers, the even numbered register is used in the instruction. Using an odd numbered register will throw an error.</p><p>In addition to the registers, there are 8 condition flags, which are used in floating point compare and branch instructions.</p><h4 id="floating-point-registers-in-mips" tabindex="-1"><strong>Floating point registers in MIPS</strong> <a class="header-anchor" href="#floating-point-registers-in-mips" aria-label="Permalink to &quot;**Floating point registers in MIPS**&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Registers</th><th>Usage</th></tr></thead><tbody><tr><td>$f0 - $f3</td><td>Used for results of floating point procedures</td></tr><tr><td>$f4 - $f11</td><td>Temporary floating point registers, whose values are NOT preserved across procedure calls</td></tr><tr><td>$f12 - $f15</td><td>Floating point parameters, whose values are NOT preserved across procedure calls</td></tr><tr><td>$f16 - $f19</td><td>More temporary floating point registers, whose values are NOT preserved across procedure calls</td></tr><tr><td>$f20 - $f31</td><td>Saved floating point registers, whose values are preserved across procedure calls</td></tr></tbody></table><p>Among the 32 registers, only $f 4 - $f 11 , $f 16 - $f 19 and $f 20 - $f 31 can be used by the programmer for storing values, as the others are reserved for special purposes.</p><p><u>Note</u></p><ul><li>Unlike the general purpose register $ 0 , $f 0 is not hardwired to be zero, and is used for storing results of procedures.</li></ul><h3 id="declaring-a-floating-point-number" tabindex="-1"><strong>Declaring a Floating point number</strong> <a class="header-anchor" href="#declaring-a-floating-point-number" aria-label="Permalink to &quot;**Declaring a Floating point number**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.data</span></span>
<span class="line"><span>  num1: .float 3.</span></span>
<span class="line"><span>  num2: .double 4.5 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  .align 2 # Since float has 2^2 bytes</span></span>
<span class="line"><span>  float_arr: .space 100 it has to be aligned to 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  .align 3 # Since double has 2^3 bytes it has to be aligned to 3</span></span>
<span class="line"><span>  double_arr: .space 100</span></span></code></pre></div><h3 id="reading-and-printing-floating-point-numbers" tabindex="-1"><strong>Reading and Printing Floating point numbers</strong> <a class="header-anchor" href="#reading-and-printing-floating-point-numbers" aria-label="Permalink to &quot;**Reading and Printing Floating point numbers**&quot;">​</a></h3><p>Reading and printing a floating point number is similar to that of an integer, using syscall, only difference being in the $v0 value and parameter registers.</p><h4 id="single-precision" tabindex="-1"><strong>Single precision</strong> <a class="header-anchor" href="#single-precision" aria-label="Permalink to &quot;**Single precision**&quot;">​</a></h4><p>The $v0 value for reading a single precision floating point number is 6 while that of printing is 2.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>main: </span></span>
<span class="line"><span>  li $v0, 6 </span></span>
<span class="line"><span>  syscall    # The number is stored in $f0 </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>  li $v0, 2 </span></span>
<span class="line"><span>  mov.s $f12, $f0   # The number to be printed is moved to $f12 </span></span>
<span class="line"><span>  syscall</span></span></code></pre></div><h4 id="double-precision" tabindex="-1"><strong>Double precision</strong> <a class="header-anchor" href="#double-precision" aria-label="Permalink to &quot;**Double precision**&quot;">​</a></h4><p>The $v0 value for reading a double precision floating point number is 7 while that of printing is 3.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>main: </span></span>
<span class="line"><span>  li $v0, 7 </span></span>
<span class="line"><span>  syscall    # The number is stored in $f0/$f1 </span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>  li $v0, 3 </span></span>
<span class="line"><span>  mov.d $f12, $f0   # The number to be printed is </span></span>
<span class="line"><span>  syscall     moved to $f12/$f13</span></span></code></pre></div><h3 id="data-movement-instructions" tabindex="-1"><strong>Data Movement Instructions</strong> <a class="header-anchor" href="#data-movement-instructions" aria-label="Permalink to &quot;**Data Movement Instructions**&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Instruction</th><th>Syntax</th><th>Remarks</th></tr></thead><tbody><tr><td>Load single/double</td><td>l.s fdest, address l.d fdest, address</td><td>The single/double floating-point stored in address is loaded onto register fdest</td></tr><tr><td>Store single/double</td><td>s.s fsrc, address s.d fsrc, address</td><td>The single/double floating-point stored in register fsrc is stored to address</td></tr><tr><td>Move single/double</td><td>mov.s fdest, fsrc mov.d fdest, fsrc</td><td>The single/double floating-point stored in register fsrc is moved to register fdest</td></tr><tr><td>Move from coprocessor 1</td><td>mfc1 dest, fsrc</td><td>The 32 - bit data from floating register fsrc is copied to general purpose register dest</td></tr><tr><td>Move to coprocessor 1</td><td>mtc1 src, fdest</td><td>The 32 - bit data from general purpose register src is copied to floating point register fdest</td></tr></tbody></table><p><u>Note</u></p><ul><li>There is no load immediate for floating point. So if a constant is needed, it has to be stored in the data segment and loaded to the required register.</li><li>For the move to/from coprocessor 1 instructions, the first operand is a general purpose register and the second one is the floating point register.</li></ul><h3 id="arithmetic-instructions-1" tabindex="-1"><strong>Arithmetic Instructions</strong> <a class="header-anchor" href="#arithmetic-instructions-1" aria-label="Permalink to &quot;**Arithmetic Instructions**&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">Instruction</th><th>Syntax</th><th>Remarks</th></tr></thead><tbody><tr><td style="text-align:left;">Addition</td><td>add.s fdest, fsrc1, fsrc2 <br> add.d fdest, fsrc1, fsrc</td><td>The single/double floating-point numbers stored in fsrc1 and fsrc2 <br> are added and stored in register fdest</td></tr><tr><td style="text-align:left;">Subtraction</td><td>sub.s fdest, fsrc1, fsrc2 <br> sub.d fdest, fsrc1, fsrc2</td><td>The single/double floating-point number stored in fsrc <br> subtracted from fsrc1 and stored in register fdest</td></tr><tr><td style="text-align:left;">Multiplication</td><td>mul.s fdest, fsrc1, fsrc2 <br> mul.d fdest, fsrc1, fsrc2</td><td>The single/double floating-point numbers stored in fsrc1 and fsrc2 <br> are multiplied and stored in register fdest</td></tr><tr><td style="text-align:left;">Division</td><td>div.s fdest, fsrc1, fsrc2 <br> div.d fdest, fsrc1, fsrc</td><td>The single/double floating-point number stored in fsrc1 is divided by fsrc2 <br> and the quotient is stored in register fdest</td></tr><tr><td style="text-align:left;">Negation</td><td>neg.s fdest, fsrc <br> neg.d fdest, fsrc</td><td>The single/double floating-point number stored in fsrc <br> is negated (Sign changed) and stored in register fdest</td></tr><tr><td style="text-align:left;">Absolute value</td><td>abs.s fdest, fsrc <br> abs.d fdest, fsrc</td><td>Absolute value (Magnitude) of the single/double floating-point number stored in fsrc <br> is stored in register fdest</td></tr><tr><td style="text-align:left;">Square root</td><td>sqrt.s fdest, fsrc <br> sqrt.d fdest, fsrc</td><td>Square root of the single/double floating-point number stored in fsrc <br> is stored in register fdest</td></tr></tbody></table><h3 id="sample-question-1" tabindex="-1"><strong>Sample Question 1</strong> <a class="header-anchor" href="#sample-question-1" aria-label="Permalink to &quot;**Sample Question 1**&quot;">​</a></h3><p>Given a temperature in Fahrenheit, convert it into Celsius (Input and output has to be floating point values).</p><p>Temperature in degrees Celsius = (Temperature in degrees Fahrenheit - 32 ) * 5 / 9.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>data </span></span>
<span class="line"><span>  # Constants used for calculation </span></span>
<span class="line"><span>  const1: .double 32.0 </span></span>
<span class="line"><span>  const2: .double 5.0 </span></span>
<span class="line"><span>  const3: .double 9.0 </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  # User prompts </span></span>
<span class="line"><span>  msg1: .asciiz &quot;Enter the temperature in Fahrenheit: &quot; </span></span>
<span class="line"><span>  msg2: .asciiz &quot;The temperature in Celsius is: &quot; </span></span>
<span class="line"><span> </span></span>
<span class="line"><span></span></span>
<span class="line"><span>.text </span></span>
<span class="line"><span>.globl main </span></span>
<span class="line"><span>main: </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  li $v0, 4                    # Printing msg1 </span></span>
<span class="line"><span>  la $a0, msg1 </span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 7                    # Reading user input </span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  mov.d $f12, $f0              # $f12 = User Input </span></span>
<span class="line"><span>  l.d $f14, const1             # $f12 = $f12 - 32 </span></span>
<span class="line"><span>  sub.d $f12, $f12, $f14 </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  l.d $f14, const2             # $f12 = $f12 * 5 </span></span>
<span class="line"><span>  mul.d $f12, $f12, $f14 </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  l.d $f14, const3             # $f12 = $f12 / 9 </span></span>
<span class="line"><span>  div.d $f12, $f12, $f14 </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 4                    # Printing msg2 </span></span>
<span class="line"><span>  la $a0, msg2 </span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 3                    # Printing final answer </span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 10                   # Exit </span></span>
<span class="line"><span>  syscall</span></span></code></pre></div><h2 id="comparison-branch-instructions" tabindex="-1"><strong>Comparison/Branch Instructions</strong> <a class="header-anchor" href="#comparison-branch-instructions" aria-label="Permalink to &quot;**Comparison/Branch Instructions**&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Instruction</th><th>Syntax</th><th>Remarks</th></tr></thead><tbody><tr><td>Compare equal</td><td>c.eq.s cc, fsrc1, fsrc2 <br> c.eq.s fsrc1, fsrc2 <br>c.eq.d cc, fsrc1, fsrc2 <br> c.eq.d fsrc1, fsrc2</td><td>Sets the condition flag cc as 1 if the numbers in fsrc1 <br> and fsrc2 are equal, 0 otherwise.</td></tr><tr><td>Compare less than</td><td>c.lt.s cc, fsrc1, fsrc2 <br> c.lt.s fsrc1, fsrc2 <br> c.lt.d cc, fsrc1, fsrc2 <br> c.lt.d fsrc1, fsrc2</td><td>Sets the condition flag cc as 1 if the number in fsrc1 <br> is less than that in fsrc2, 0 otherwise.</td></tr><tr><td>Compare less than or equal to</td><td>c.le.s cc, fsrc1, fsrc2 <br> c.le.s fsrc1, fsrc2 <br> c.le.d cc, fsrc1, fsrc2 <br> c.le.d fsrc1, fsrc</td><td>Sets the condition flag cc as 1 if the number in fsrc1 <br> is less thanor equal to that in fsrc2, 0 otherwise.</td></tr><tr><td>Branch if true</td><td>bc1t cc, label <br> bc1t label</td><td>Jumps to label if the condition flag cc is set as 1</td></tr><tr><td>Branch if false</td><td>bc1f cc, label <br> bc1f label</td><td>Jumps to label if the condition flag cc is set as 0</td></tr></tbody></table><p><u>Note</u></p><ul><li>The condition flag can be omitted in the above instructions, in which case condition flag 0 is taken as default.</li><li>As there is no comparison instruction for “Not equal to”, it has to be implemented by reversing the required branch condition Ex. We need to branch to label if $f4 and $f6 are not equal. This can be written as<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  c.eq.d $f4, $f6</span></span>
<span class="line"><span>  bc1.f label</span></span></code></pre></div></li><li>For greater than and greater than and equal to, it is simpler to reverse the input registers. Ex. We need to branch to label if $f4 if greater than $f6. This can be written as<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  c.le.d $f6 , $f4</span></span>
<span class="line"><span>  bc1.t label</span></span></code></pre></div></li></ul><h3 id="sample-question-2" tabindex="-1"><strong>Sample Question 2</strong> <a class="header-anchor" href="#sample-question-2" aria-label="Permalink to &quot;**Sample Question 2**&quot;">​</a></h3><p>Given an array of floating numbers of size n, print the maximum and minimum element</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>data </span></span>
<span class="line"><span>  # Array </span></span>
<span class="line"><span>  .align 3 </span></span>
<span class="line"><span>  arr: .space 1000 </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  # Characters </span></span>
<span class="line"><span>  newline: .asciiz &quot;\\n&quot; </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  # User Prompts </span></span>
<span class="line"><span>  msg1: .asciiz &quot;Enter n: &quot; </span></span>
<span class="line"><span>  msg2: .asciiz &quot;Enter no. &quot; </span></span>
<span class="line"><span>  msg3: .asciiz &quot;: &quot; </span></span>
<span class="line"><span>  msg4: .asciiz &quot;The maximum no. is: &quot; </span></span>
<span class="line"><span>  msg5: .asciiz &quot;The minimum no. is: &quot; </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>.text </span></span>
<span class="line"><span>.globl main </span></span>
<span class="line"><span>main: </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 4    # Print msg1 </span></span>
<span class="line"><span>  la $a0, msg1 </span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 5    # Read n </span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span>  move $t0, $v0 </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $t1, 0    # $t1 will be the loop variable  </span></span>
<span class="line"><span>               # going from 0,1,2.. </span></span>
<span class="line"><span>  li $t2, 0    # $t2 will be the element indices </span></span>
<span class="line"><span>               # going from 0,8,16.. </span></span>
<span class="line"><span>  loop1:                      # Loop to read n elements </span></span>
<span class="line"><span>    beq $t0, $t1, end_loop1   # Termination condition </span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    li $v0, 4                 # Print msg2 </span></span>
<span class="line"><span>    la $a0, msg2 </span></span>
<span class="line"><span>    syscall </span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    li $v0, 1                 # Print position of                    </span></span>
<span class="line"><span>    move $a0, $t1             # number to be inputted </span></span>
<span class="line"><span>    addi $a0, $a0, 1 </span></span>
<span class="line"><span>    syscall </span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    li $v0, 4                 # Print msg3 </span></span>
<span class="line"><span>    la $a0, msg3 </span></span>
<span class="line"><span>    syscall </span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    li $v0, 7                 # Read input and  </span></span>
<span class="line"><span>    syscall                   # store in arr </span></span>
<span class="line"><span>    s.d $f0, arr($t2) </span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    addi $t1, $t1, 1   # Increamenting #t1  </span></span>
<span class="line"><span>    addi $t2, $t2, 8   # and $t2 </span></span>
<span class="line"><span>    j loop1 </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  end_loop1: </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $t1, 0    # Resetting $t1 and $t2 </span></span>
<span class="line"><span>  li $t2, 0 </span></span>
<span class="line"><span>  l.d $f4, arr($zero)  # $f4 stores the max value </span></span>
<span class="line"><span>  l.d $f6, arr($zero)  # $f6 stores the min value</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  loop2:                        # Loop to compute max and min </span></span>
<span class="line"><span>    beq $t0, $t1, end_loop2     # Termination Condition </span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    l.d $f8, arr($t2)           # Load a number from arr </span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    c.lt.d $f4, $f8             # Compare if the number is  </span></span>
<span class="line"><span>                                # greater than current max </span></span>
<span class="line"><span>    bc1f not_max  </span></span>
<span class="line"><span>      mov.d $f4, $f8            # If yes then update new max </span></span>
<span class="line"><span>    not_max: </span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    c.lt.d $f8, $f6             # Compare if the number is  </span></span>
<span class="line"><span>                                # less than current min </span></span>
<span class="line"><span>    bc1f not_min </span></span>
<span class="line"><span>      mov.d $f6, $f8            # If yes then update new min </span></span>
<span class="line"><span>    not_min: </span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    addi $t1, $t1, 1            # Incrementing $t1 and $t2 </span></span>
<span class="line"><span>    addi $t2, $t2, 8 </span></span>
<span class="line"><span>    j loop2 </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  end_loop2: </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 4                      # Print msg4 </span></span>
<span class="line"><span>  la $a0, msg4 </span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 3                      # Print max number </span></span>
<span class="line"><span>  mov.d $f12, $f4 </span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span></span></span>
<span class="line"><span>  i $v0, 4    # Print newline </span></span>
<span class="line"><span>  la $a0, newline </span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 4    # Print msg5 </span></span>
<span class="line"><span>  la $a0, msg5 </span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 3    # Print min number </span></span>
<span class="line"><span>  mov.d $f12, $f6 </span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 10   # Exit </span></span>
<span class="line"><span>  syscall</span></span></code></pre></div><h3 id="data-conversion-instructions" tabindex="-1"><strong>Data Conversion Instructions</strong> <a class="header-anchor" href="#data-conversion-instructions" aria-label="Permalink to &quot;**Data Conversion Instructions**&quot;">​</a></h3><h4 id="conversion-within-floating-point" tabindex="-1"><strong>Conversion within floating point</strong> <a class="header-anchor" href="#conversion-within-floating-point" aria-label="Permalink to &quot;**Conversion within floating point**&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Instruction</th><th>Syntax</th><th>Remarks</th></tr></thead><tbody><tr><td>Convert single to double</td><td>cvt.d.s fdest, fsrc</td><td>The single floating-point stored in fsrc is converted to double and stored in fdest</td></tr><tr><td>Convert double to single</td><td>cvt.s.d fdest, fsrc</td><td>The double floating-point stored in fsrc is converted to single and stored in fdest</td></tr></tbody></table><h3 id="conversion-to-integers" tabindex="-1"><strong>Conversion to integers</strong> <a class="header-anchor" href="#conversion-to-integers" aria-label="Permalink to &quot;**Conversion to integers**&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Instruction</th><th>Syntax</th><th>Remarks</th></tr></thead><tbody><tr><td>Convert single to integer</td><td>cvt.w.s fdest, fsrc</td><td>The single floating-point stored in fsrc is converted to 32 bit integer (Ignoring the part after decimal point) <br> and stored in 2 ’s compliment form in fdest</td></tr><tr><td>Convert double to integer</td><td>cvt.w.d fdest, fsrc</td><td>The double floating-point stored in fsrc is converted to 32 bit integer (Ignoring the part after decimal point) and <br> stored in 2 ’s compliment form in fdest</td></tr></tbody></table><p><u> Note </u></p><ul><li>The output of the above two instructions is in 2 ’s compliment form, which should not be used with any other instructions other than mfc1. Other instructions always assume the data in registers are according to IEEE standards, which can cause errors.</li></ul><h4 id="conversion-from-integers" tabindex="-1"><strong>Conversion from integers</strong> <a class="header-anchor" href="#conversion-from-integers" aria-label="Permalink to &quot;**Conversion from integers**&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Instruction</th><th>Syntax</th><th>Remarks</th></tr></thead><tbody><tr><td>Convert integer to single</td><td>cvt.s.w fdest, fsrc</td><td>The data stored in fsrc is considered as an integer in 2 ’s compliment form and <br> is converted to single precision floating point and is stored in fdest</td></tr><tr><td>Convert integer to double</td><td>cvt.d.w fdest, fsrc</td><td>The data stored in fsrc is considered as an integer in 2 ’s compliment form and <br> is converted to double precision floating point and is stored in fdest</td></tr></tbody></table><h3 id="special-instructions" tabindex="-1"><strong>Special Instructions</strong> <a class="header-anchor" href="#special-instructions" aria-label="Permalink to &quot;**Special Instructions**&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Instruction</th><th>Syntax</th><th>Remarks</th></tr></thead><tbody><tr><td>Ceiling</td><td>ceil.w.s fdest, fsrc <br> ceil.w.d fdest, fsrc</td><td>The smallest integer not greater than the floating point number in fsrc <br> is stored in fdest in 2 ’s compliment form</td></tr><tr><td>Floor</td><td>floor.w.s fdest, fsrc <br> floor.w.d fdest, fsrc</td><td>The greatest integer not smaller than the floating point number in fsrc <br> is stored in fdest in 2 ’s compliment form</td></tr><tr><td>Round to nearest integer</td><td>round.w.s fdest, fsrc <br> round.w.d fdest, fsrc</td><td>The floating-point stored in fsrc is rounded off to <br> nearest integer and stored in fdest in 2 ’s compliment form</td></tr></tbody></table><h3 id="sample-question-3" tabindex="-1"><strong>Sample Question 3</strong> <a class="header-anchor" href="#sample-question-3" aria-label="Permalink to &quot;**Sample Question 3**&quot;">​</a></h3><p>Given a floating point number and an integer n, round off the floating point number to n digits.</p><p><u> Hint- </u></p><p>Multiplty then given number with 10^n, and round off using round.w.d instruction. Divide the result by 10^n to obtain the final result.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>data </span></span>
<span class="line"><span>  # Constants used for calculation </span></span>
<span class="line"><span>  const1: .double 0.0 </span></span>
<span class="line"><span>  const2: .double 1.0 </span></span>
<span class="line"><span>  const3: .double 10.0 </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  # User prompts </span></span>
<span class="line"><span>  msg1: .asciiz &quot;Enter the number : &quot; </span></span>
<span class="line"><span>  msg2: .asciiz &quot;Enter number of digits to round off to: &quot; </span></span>
<span class="line"><span>  msg3: .asciiz &quot;The rounded off number is: &quot; </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>.text </span></span>
<span class="line"><span>.globl main </span></span>
<span class="line"><span>main: </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 4     # Print msg1 </span></span>
<span class="line"><span>  la $a0, msg1 </span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 7     # Read number to round off </span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  mov.d $f12, $f0    # $f12 = user input </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 4     # Print msg2 </span></span>
<span class="line"><span>  la $a0, msg2 </span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 7     # Read n </span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span></span></span>
<span class="line"><span>  mov.d $f16, $f0    # $f16 = n </span></span>
<span class="line"><span>  l.d $f4, const1    # $f4 used as a loop varibale </span></span>
<span class="line"><span>                     # initialised to 0 </span></span>
<span class="line"><span>  l.d $f6, const2    # $f6 used to store 10^n </span></span>
<span class="line"><span>  l.d $f8, const3    # $f8 used to store 10 for  </span></span>
<span class="line"><span>                     # calculating power </span></span>
<span class="line"><span>  l.d $f10, const2   # $f10 used to store 1 for  </span></span>
<span class="line"><span>                     # incrementing loop variable </span></span>
<span class="line"><span>  loop1:    # Loop to compute 10^n </span></span>
<span class="line"><span>    c.eq.d $f4, $f16  # Ternminaltion Condition </span></span>
<span class="line"><span>    bc1t end_loop1 </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    mul.d $f6, $f6, $f8 # $f6 = $f6 * 10 </span></span>
<span class="line"><span>    add.d $f4, $f4, $f10  # $f4 = $f4 + 1 </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    j loop1 </span></span>
<span class="line"><span>  end_loop1: </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  mul.d $f12, $f12, $f6  # $f12 = $f12 * (10^n) </span></span>
<span class="line"><span>  round.w.d $f12, $f12   # $f12 is rounded to nearest </span></span>
<span class="line"><span>                         # integer </span></span>
<span class="line"><span>  cvt.d.w $f12, $f12     # Output after rounding,  </span></span>
<span class="line"><span>                         # which is a word, is  </span></span>
<span class="line"><span>                         # converted back to double </span></span>
<span class="line"><span>  div.d $f12, $f12, $f6  # $f12 = $f12 / (10^n) </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 4    # Print msg3 </span></span>
<span class="line"><span>  la $a0, msg3 </span></span>
<span class="line"><span>  syscall  </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  li $v0, 3    # Print final answer </span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 10   # Exit </span></span>
<span class="line"><span>  syscall</span></span></code></pre></div><h2 id="integer-arrays" tabindex="-1">Integer Arrays <a class="header-anchor" href="#integer-arrays" aria-label="Permalink to &quot;Integer Arrays&quot;">​</a></h2><p>An Integer Array is continuous storage block in memory in which each element is an integer. Each element of an array is accessed using the base address of the array and the index of the element we must access.</p><h3 id="declaration-and-initialization" tabindex="-1"><strong>Declaration and Initialization</strong> <a class="header-anchor" href="#declaration-and-initialization" aria-label="Permalink to &quot;**Declaration and Initialization**&quot;">​</a></h3><p>Integer arrays can be initialized using .word or an empty array can be declared using the .space keyword inside the .data section of the program</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>data: </span></span>
<span class="line"><span>arr: .word 3,4,-5,6    #initialized an array arr=[3,4,-5,6] </span></span>
<span class="line"><span>arr2: .space 40  # empty array with 40 bytes reserved for arr2</span></span></code></pre></div><h3 id="array-traversal" tabindex="-1"><strong>Array Traversal</strong> <a class="header-anchor" href="#array-traversal" aria-label="Permalink to &quot;**Array Traversal**&quot;">​</a></h3><p>Array traversal refers to accessing each element of the array using its index.</p><p>Each integer element of an array occupies a word (4 bytes). Therefore,4 bytes needed to be added to the current address to obtain the address of the following element.</p><p><em>Address of arr [k] = base address of arr + 4 * k</em></p><p>Eg: To access arr[3] and store it to $t</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>a $s0,arr   # base add address of array is stored in $s0 </span></span>
<span class="line"><span>addi $s0,$s0,12    #  $s0 = address of arr[3] = arr + 4 * 3 </span></span>
<span class="line"><span>lw $t2,0($s0)    # $t2=arr[3]</span></span></code></pre></div><p>or</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>a $s0,arr   # base add address of array is stored in $s0 </span></span>
<span class="line"><span>lw $t2,12($s0)  # $t2=value of (arr + 12)</span></span></code></pre></div><h3 id="array-input" tabindex="-1"><strong>Array Input</strong> <a class="header-anchor" href="#array-input" aria-label="Permalink to &quot;**Array Input**&quot;">​</a></h3><p>The elements of an integer array can be received from the user using the syscall for integer input and a for loop.</p><p><em>An empty array must be declared in the .data by allocating the necessary space as shown before.</em></p><p><em>Each integer element of an array occupies 4 bytes. Therefore, 4 bytes needed to be added to the current address after each insertion.</em></p><p>The following code segment can be used to create an array of size n by receiving inputs from the user:</p><p>Assume $s1 contains n, $s0 contains base address of an empty array and $t0 is the loop counter</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>for: </span></span>
<span class="line"><span>  beq $t0,$s1,exit      # loop termination condition </span></span>
<span class="line"><span>  sll $t1,$t0,2         # $t1=i*4 </span></span>
<span class="line"><span>  add $t1,$t1,$s0   # $t1 = arr + i * 4         </span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>  li $v0,5           # input integer and store in $t2 </span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span>  move $t2,$v0 </span></span>
<span class="line"><span>  sw $t2,0($t1)      # $t2 = arr[i] </span></span>
<span class="line"><span>  addi $t0,$t0,1     # increment loop counter i </span></span>
<span class="line"><span>  j for</span></span></code></pre></div><h3 id="printing-an-integer-array" tabindex="-1"><strong>Printing an Integer Array</strong> <a class="header-anchor" href="#printing-an-integer-array" aria-label="Permalink to &quot;**Printing an Integer Array**&quot;">​</a></h3><p>Integer Array can be printed by traversing each element by using array traversal rules (as discussed above) and integer printing (code 1 is loaded to $v0).</p><p>Consider the following code snippet to print the array created in the previous example in which every element is provided by the user:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>la $s0,arr             # store base address of array in $s0 </span></span>
<span class="line"><span>li $t0,0 </span></span>
<span class="line"><span>print: </span></span>
<span class="line"><span>  beq $t0,$s1,end  </span></span>
<span class="line"><span>  sll $t1,$t0,2       # array traversal to access arr[i] </span></span>
<span class="line"><span>  add $t1,$t1,$s0 </span></span>
<span class="line"><span>  lw $t2,0($t1)       # $t2=arr[i] </span></span>
<span class="line"><span>  li $v0,1            # 1 is the syscall number to print integers </span></span>
<span class="line"><span>  move $a0,$t2         # print $t2   </span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  li $a0, 32     # 32 is the ASCII code for space  </span></span>
<span class="line"><span>  li $v0, 11          # syscall number for printing character </span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span>  addi $t0,$t0,1 # increment loop counter </span></span>
<span class="line"><span>  j print </span></span>
<span class="line"><span>end:                         </span></span>
<span class="line"><span>li $v0,10   #end program        </span></span>
<span class="line"><span>syscall</span></span></code></pre></div><h3 id="negative-numbers-as-elements" tabindex="-1"><strong>Negative Numbers as Elements</strong> <a class="header-anchor" href="#negative-numbers-as-elements" aria-label="Permalink to &quot;**Negative Numbers as Elements**&quot;">​</a></h3><p>All integer operations in MIPS support both positive and negative numbers. No changes are required to the program for the input and output of positive integers.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>enter array element: -5 </span></span>
<span class="line"><span>enter array element: -6 </span></span>
<span class="line"><span>enter array element: 8 </span></span>
<span class="line"><span>enter array element: -2 </span></span>
<span class="line"><span>The elements of the array are: -5.0 -6.0 8.0 -2.0  </span></span>
<span class="line"><span>-- program is finished running --</span></span></code></pre></div><h3 id="floating-point-numbers-as-elements" tabindex="-1"><strong>Floating Point Numbers as Elements</strong> <a class="header-anchor" href="#floating-point-numbers-as-elements" aria-label="Permalink to &quot;**Floating Point Numbers as Elements**&quot;">​</a></h3><p>An array of floating-point numbers can be created by replacing all the integer operations with floating-point operations. The following changes need to be made to convert an integer array into an array of floating-point numbers:</p><ol><li>Replace the integer code loaded to $v0 by floating-point code</li><li>Replace the load, store and move operation by l.s , s.s and mov.s where floating point data type is used</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># program to input array </span></span>
<span class="line"><span>for: </span></span>
<span class="line"><span>  beq $t0,$s1,exit</span></span>
<span class="line"><span>  sll $t1,$t0,2</span></span>
<span class="line"><span>  add $t1,$t1,$s0  </span></span>
<span class="line"><span>  li $v0,6          # code for floating point input </span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span>  s.s $f0,0($t1)    # arr[i]=$f0 </span></span>
<span class="line"><span>  addi $t0,$t0,1 </span></span>
<span class="line"><span>  j for  </span></span>
<span class="line"><span>exit: </span></span>
<span class="line"><span></span></span>
<span class="line"><span># print array </span></span>
<span class="line"><span>print: </span></span>
<span class="line"><span>  beq $t0,$s1,end  </span></span>
<span class="line"><span>  sll $t1,$t0,2       </span></span>
<span class="line"><span>  add $t1,$t1,$s0 </span></span>
<span class="line"><span>  l.s $f0,0($t1)       # $f0=arr[i] </span></span>
<span class="line"><span>  li $v0,2           # code for printing floating point </span></span>
<span class="line"><span>  mov.s $f12,$f0   </span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span>  li $a0, 32           </span></span>
<span class="line"><span>  li $v0, 11           </span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span>  addi $t0,$t0,1  </span></span>
<span class="line"><span>  j print </span></span>
<span class="line"><span>end</span></span></code></pre></div><h3 id="one-dimensional-arrays" tabindex="-1"><strong>One Dimensional Arrays</strong> <a class="header-anchor" href="#one-dimensional-arrays" aria-label="Permalink to &quot;**One Dimensional Arrays**&quot;">​</a></h3><h4 id="to-calculate-the-sum-of-n-numbers-in-an-n-sized-array" tabindex="-1"><strong>To calculate the sum of n numbers in an n sized array</strong> <a class="header-anchor" href="#to-calculate-the-sum-of-n-numbers-in-an-n-sized-array" aria-label="Permalink to &quot;**To calculate the sum of n numbers in an n sized array**&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>li $t0,0 </span></span>
<span class="line"><span>la $s0,arr </span></span>
<span class="line"><span>li $t3,0        #t3 stores the sum </span></span>
<span class="line"><span>sum:          #for loop </span></span>
<span class="line"><span>  beq $t0,$s1,end     # $s1 contains n </span></span>
<span class="line"><span>  sll $t1,$t0,2              </span></span>
<span class="line"><span>  add $t1,$t1,$s0 </span></span>
<span class="line"><span>  lw $t2,0($t1)      # $t2=arr[i] </span></span>
<span class="line"><span>  add $t3,$t3,$t2    # $t3=$t3+$t2 </span></span>
<span class="line"><span>  addi $t0,$t0,1     # increment loop counter </span></span>
<span class="line"><span>  j sum </span></span>
<span class="line"><span>end:                 </span></span>
<span class="line"><span>li $v0,1              # print sum </span></span>
<span class="line"><span>move $a0,$t3                 </span></span>
<span class="line"><span>syscall</span></span></code></pre></div><h4 id="to-find-the-largest-element-in-an-n-sized-array" tabindex="-1"><strong>To find the largest element in an n sized array</strong> <a class="header-anchor" href="#to-find-the-largest-element-in-an-n-sized-array" aria-label="Permalink to &quot;**To find the largest element in an n sized array**&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>la $s0,arr </span></span>
<span class="line"><span>li $t0,0 </span></span>
<span class="line"><span>li $t3,-1000 # $t3=max </span></span>
<span class="line"><span>  # initialized to -1000   </span></span>
<span class="line"><span>max: </span></span>
<span class="line"><span>  beq $t0,$s1,end # $s1 contains n </span></span>
<span class="line"><span>  sll $t1,$t0,2              </span></span>
<span class="line"><span>  add $t1,$t1,$s0 </span></span>
<span class="line"><span>  lw $t2,0($t1)  # $t2=arr[i] </span></span>
<span class="line"><span>  ble $t2,$t3,inc_i  # if arr[i]&lt;=max, jump to inc_count </span></span>
<span class="line"><span>  move $t3,$t2   # if arr[i]&gt;max, max=arr[i] </span></span>
<span class="line"><span>  inc_count: </span></span>
<span class="line"><span>    addi $t0,$t0,1  # increment loop counter </span></span>
<span class="line"><span>    j max </span></span>
<span class="line"><span>end:  </span></span>
<span class="line"><span>li $v0,1                  # print max </span></span>
<span class="line"><span>move $a0,$t3                 </span></span>
<span class="line"><span>syscall</span></span></code></pre></div><h2 id="string-operations-advanced" tabindex="-1"><strong>String Operations (Advanced)</strong> <a class="header-anchor" href="#string-operations-advanced" aria-label="Permalink to &quot;**String Operations (Advanced)**&quot;">​</a></h2><h3 id="null-character-and-newline" tabindex="-1"><strong>Null Character and Newline</strong> <a class="header-anchor" href="#null-character-and-newline" aria-label="Permalink to &quot;**Null Character and Newline**&quot;">​</a></h3><p>When strings are created by using user input (code 8 passed to $vo), it forms a sequence of ASCII characters that are terminated by a newline character, followed by a NULL character. The newline character is triggered by the pressing of enter key during user input.</p><p><em>The ASCII code for newline is 10. Hence</em> beq, $t1,10,label <em>can be used as a comparing instruction</em></p><p><em>MIPS treats NULL character as a zero. Hence</em> beqz, $t1, label <em>can be used as a comparing instruction</em></p><h3 id="string-traversal" tabindex="-1"><strong>String Traversal</strong> <a class="header-anchor" href="#string-traversal" aria-label="Permalink to &quot;**String Traversal**&quot;">​</a></h3><p>Strings are made up of characters, in which each character occupies a byte. Hence, unlike an Integer Array, each character must be traversed byte by byte.</p><p>Eg:</p><p>To find the length of a string (newline character need not be included)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># assume string is input to str1 </span></span>
<span class="line"><span>li $s1,0 #loop counter (i) </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>len: </span></span>
<span class="line"><span>  lb $t1,str1($s1)  # $t1=str[i] </span></span>
<span class="line"><span>  beq $t1,10,start  # termination condition </span></span>
<span class="line"><span>  addi $s1,$s1,1    # i=i+1 </span></span>
<span class="line"><span>  j len </span></span>
<span class="line"><span>start: </span></span>
<span class="line"><span>  li $v0,1          # print len=i  </span></span>
<span class="line"><span>  move $a0,$s1 </span></span>
<span class="line"><span>  syscall</span></span></code></pre></div><p><em>If the newline character needs to be included in the length, beq should be replaced with beqz</em></p><h3 id="string-concatenation" tabindex="-1"><strong>String Concatenation</strong> <a class="header-anchor" href="#string-concatenation" aria-label="Permalink to &quot;**String Concatenation**&quot;">​</a></h3><p>Concatenation of two strings can be done using 2 loops. The presence of newline and null character at the end of each string should be considered.</p><p>Consider two strings, str1 and str2. The following is the pseudocode and the code snippet for concatenating str2 to str1:<br><em>Pseudo Code:</em></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> str1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[i]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> str2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[j]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">str1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[i]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">str2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[j]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span></span></code></pre></div><p><em>MIPS:</em></p><div class="language-mips vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mips</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>i $s1,0           # i=0 </span></span>
<span class="line"><span>li $s2,0           # j=0 </span></span>
<span class="line"><span>loop1: </span></span>
<span class="line"><span>   lb $t1,str1($s1)  </span></span>
<span class="line"><span>  beq $t1,10,loop2 </span></span>
<span class="line"><span>  addi $s1,$s1,1           # i++ </span></span>
<span class="line"><span>  j loop1 </span></span>
<span class="line"><span>loop2: </span></span>
<span class="line"><span>  lb $t1,str2($s2) </span></span>
<span class="line"><span>  beqz $t1,end </span></span>
<span class="line"><span>  sb $t1,str1($s1)    # str1[i]=str[j] </span></span>
<span class="line"><span>  addi $s1,$s1,1      # i++ </span></span>
<span class="line"><span>  addi $s2,$s2,1      # j++ </span></span>
<span class="line"><span>  j loop2 </span></span>
<span class="line"><span>end:</span></span></code></pre></div><h3 id="palindrome-checking" tabindex="-1"><strong>Palindrome Checking</strong> <a class="header-anchor" href="#palindrome-checking" aria-label="Permalink to &quot;**Palindrome Checking**&quot;">​</a></h3><p>A palindrome sequence that reads the same backwards as forwards. Palindrome checking uses two pointer method.</p><p>Assume a string str, whole length is n. Length of the string is calculated by previous method and stored in $s1. The following code snippet shows the while loop necessary for checking whether the string is palindrome</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>addi $s1,$s1,-1 # j=n-1  </span></span>
<span class="line"><span>li $s0,0        # i=0 </span></span>
<span class="line"><span>for: </span></span>
<span class="line"><span>  lb $t1,str($s0)   </span></span>
<span class="line"><span>  lb $t2,str($s1)   </span></span>
<span class="line"><span>  bge $s0,$s1,true    # if i&gt;=j,exit loop. return True </span></span>
<span class="line"><span>  bne $t1,$t2,false   # if str[i]!=str[j], return False </span></span>
<span class="line"><span>  addi $s0,$s0,1      #  i++ </span></span>
<span class="line"><span>  addi $s1,$s1,-1     #  j-- </span></span>
<span class="line"><span>  j for</span></span></code></pre></div><h2 id="two-dimensional-arrays" tabindex="-1"><strong>Two Dimensional Arrays</strong> <a class="header-anchor" href="#two-dimensional-arrays" aria-label="Permalink to &quot;**Two Dimensional Arrays**&quot;">​</a></h2><p>2-DArrays/Matrices/Tables aren’t stored in memory the way it is normally visualized; rather it is stored as a single array in either row major form or column major form. Let’s see how a matrix is represented in memory in both the forms with a starting address of 1230. (Remember:In an array each element is 4 bytes long).</p><p>a) Row Major form : Here elements are stored row wise. First we store the first row, then the second and soon.</p><img src="`+g+'"><p>b) Column Major form: Here elements are stored column wise. First we store the first column, then the second and soon.</p><p>Row Major form ( starting address 1000 )</p><img src="'+u+'"><p>Column Major form ( starting address 1000 )</p><img src="'+k+`"><h3 id="sample-code" tabindex="-1"><strong>Sample code</strong> <a class="header-anchor" href="#sample-code" aria-label="Permalink to &quot;**Sample code**&quot;">​</a></h3><p><em>-&gt;Insertion of elements and printing the 2D-array</em></p><p><em>**We are using row major form to input the elements as a string</em></p><p><em>**NOTE: all characters need to be space separated, the end of the sequence also need to have a space</em></p><h3 id="pseudo-code" tabindex="-1"><strong>Pseudo code-&gt;</strong> <a class="header-anchor" href="#pseudo-code" aria-label="Permalink to &quot;**Pseudo code-&gt;**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Prompt user for number of rows and columns</span></span>
<span class="line"><span>Initialize 2D array</span></span>
<span class="line"><span>Prompt user to enter matrix values as a string</span></span>
<span class="line"><span>Loop through input string:</span></span>
<span class="line"><span>- Extract numbers delimited by spaces</span></span>
<span class="line"><span>- Convert each substring to integer and store in the 2D array</span></span>
<span class="line"><span>Print the matrix:</span></span>
<span class="line"><span>- Loop through rows:</span></span>
<span class="line"><span>- Loop through columns:</span></span>
<span class="line"><span>- Print each element of the matrix</span></span>
<span class="line"><span>- Print a space between elements</span></span>
<span class="line"><span>- Print a newline after each row</span></span>
<span class="line"><span>Exit the program</span></span></code></pre></div><h3 id="mips-code" tabindex="-1"><strong>MIPS Code-&gt;</strong> <a class="header-anchor" href="#mips-code" aria-label="Permalink to &quot;**MIPS Code-&gt;**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.data</span></span>
<span class="line"><span>newline: .asciiz &quot;\\n&quot;</span></span>
<span class="line"><span>space: .asciiz &quot; &quot;</span></span>
<span class="line"><span>msg_rows: .asciiz &quot;Enter number of rows : &quot;</span></span>
<span class="line"><span>msg_columns: .asciiz &quot;Enter number of columns : &quot;</span></span>
<span class="line"><span>msg_input: .asciiz &quot;Enter matrix ( row major form ) : &quot;</span></span>
<span class="line"><span>mat1: .space 100</span></span>
<span class="line"><span>input: .space 100</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.text</span></span>
<span class="line"><span>main:</span></span>
<span class="line"><span>  li $v0, 4</span></span>
<span class="line"><span>  la $a0, msg_rows</span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 5</span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span>  move $t0, $v0         # $t0 = number of rows</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  li $v0, 4</span></span>
<span class="line"><span>  la $a0, msg_columns</span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  li $v0, 5</span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span>  move $t1, $v0         # $t1 = number of columns</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  li $v0, 4</span></span>
<span class="line"><span>  la $a0, msg_input</span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 8 # syscall for read_str</span></span>
<span class="line"><span>  la $a0, input # Load address of input buer</span></span>
<span class="line"><span>  li $a1, 100 # Maximum length</span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  la $t2, input</span></span>
<span class="line"><span>  la $t3, mat1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  li $t5, 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # t2 - address of input string</span></span>
<span class="line"><span>  # t3 - address of matrix</span></span>
<span class="line"><span>  # t4 - used to iterate through string</span></span>
<span class="line"><span>  # t5 - used to calculate number</span></span>
<span class="line"><span></span></span>
<span class="line"><span>input_loop:</span></span>
<span class="line"><span>  lb $t4, 0($t2)</span></span>
<span class="line"><span>  beq $t4, 32, store</span></span>
<span class="line"><span></span></span>
<span class="line"><span># when a space is detected add the number calculated to the array and continue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  beq $t4, $zero , end_input</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#In ASCII encoding, the decimal value 32 corresponds to the space character (&#39; &#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#This loop exist to calculate numbers that have more than one digit , since our input is a string.</span></span>
<span class="line"><span></span></span>
<span class="line"><span># We need to iterate and add the characters until we detect a space</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  sub $t6 , $t4, 48 # converts character to integer</span></span>
<span class="line"><span></span></span>
<span class="line"><span># for calculating the number</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  mul $t5, $t5, 10</span></span>
<span class="line"><span>  add $t5, $t5, $t6</span></span>
<span class="line"><span>  addi $t2, $t2, 1</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  j input_loop</span></span>
<span class="line"><span>store:</span></span>
<span class="line"><span>  sw $t5, 0($t3) #store the number obtained in the 2D-array</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  addi $t3, $t3, 4 #increment the address to next memory block</span></span>
<span class="line"><span>  li $t5, 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  add $t2 , $t2 , 1 #increment the index of string</span></span>
<span class="line"><span>  j input_loop #loop back to the input to continue iteration of string</span></span>
<span class="line"><span></span></span>
<span class="line"><span>end_input :</span></span>
<span class="line"><span>  li $t6 , 0 # Initialize row index</span></span>
<span class="line"><span>  la $t8, mat1 # Load address of array for printing</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 4</span></span>
<span class="line"><span>  la $a0, newline</span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print_loop:</span></span>
<span class="line"><span>  beq $t6 , $t0 , end_programme</span></span>
<span class="line"><span>  li $t7 , 0 # Initialize column index</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print_column_loop:</span></span>
<span class="line"><span>  lw $t9 , 0($t8) # Load number from array</span></span>
<span class="line"><span>  li $v0, 1 # syscall for print_int</span></span>
<span class="line"><span>  move $a0, $t9 # Load number to print</span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  li $v0, 4 # syscall for print_str </span></span>
<span class="line"><span>  la $a0, space # Load address of space</span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  addi $t7, $t7, 1 # Increment column index</span></span>
<span class="line"><span>  addi $t8 , $t8 , 4 # Increment base address</span></span>
<span class="line"><span>  blt $t7, $t1 , print_column_loop # Print all elements in the row</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Print newline after each row</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0 , 4</span></span>
<span class="line"><span>  la $a0 , newline</span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Reset column index for next row</span></span>
<span class="line"><span>  li $t7 , 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Increment row index</span></span>
<span class="line"><span>  addi $t6 , $t6 , 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  j print_loop</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>end_programme :</span></span>
<span class="line"><span>  li $v0, 10 # syscall for exit</span></span>
<span class="line"><span>  syscall</span></span></code></pre></div><h3 id="output" tabindex="-1"><strong>Output</strong> <a class="header-anchor" href="#output" aria-label="Permalink to &quot;**Output**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  Enter number of rows:3</span></span>
<span class="line"><span>  Enter number of columns:3</span></span>
<span class="line"><span>  Enter matrix(row major form) : 1 2 3 4 5 6 7 8 9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  1 2 3 </span></span>
<span class="line"><span>  4 5 6 </span></span>
<span class="line"><span>  7 8 9</span></span></code></pre></div><h3 id="to-find-maximum-and-minimum-element-in-a-2-d-array" tabindex="-1"><strong>-&gt;To find maximum and minimum element in a 2-D array</strong> <a class="header-anchor" href="#to-find-maximum-and-minimum-element-in-a-2-d-array" aria-label="Permalink to &quot;**-&gt;To find maximum and minimum element in a 2-D array**&quot;">​</a></h3><p>**We are using row major form to input the elements as a string</p><p>**same process of taking the input as the above</p><p><strong>**NOTE: all characters need to be space separated, the end of the sequence also need to have a space</strong></p><h4 id="pseudo-code-1" tabindex="-1"><strong>Pseudo code-&gt;</strong> <a class="header-anchor" href="#pseudo-code-1" aria-label="Permalink to &quot;**Pseudo code-&gt;**&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Prompt user for number of rows and columns</span></span>
<span class="line"><span>Initialize 2D array</span></span>
<span class="line"><span>Prompt user to enter matrix values as a string</span></span>
<span class="line"><span>Loop through input string:</span></span>
<span class="line"><span>- Extract numbers delimited by spaces</span></span>
<span class="line"><span>- Convert each substring to integer and store in the 2D</span></span>
<span class="line"><span>array</span></span>
<span class="line"><span>Find minimum and maximum elements in the matrix:</span></span>
<span class="line"><span>- Initialize minimum element to maximum possible value</span></span>
<span class="line"><span>and maximum element to 0</span></span>
<span class="line"><span>- Loop through each element of the matrix:</span></span>
<span class="line"><span>- Update minimum and maximum elements if necessary</span></span>
<span class="line"><span>Print the maximum element message:</span></span>
<span class="line"><span>- Print &quot;The maximum element is: &quot;</span></span>
<span class="line"><span>- Print the maximum element</span></span>
<span class="line"><span>Print the minimum element message:</span></span>
<span class="line"><span>- Print &quot;The minimum element is: &quot;</span></span>
<span class="line"><span>- Print the minimum element</span></span>
<span class="line"><span>Exit the program</span></span></code></pre></div><h3 id="mips-code-1" tabindex="-1"><strong>MIPS Code-&gt;</strong> <a class="header-anchor" href="#mips-code-1" aria-label="Permalink to &quot;**MIPS Code-&gt;**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.data</span></span>
<span class="line"><span>newline: .asciiz &quot;\\n&quot;</span></span>
<span class="line"><span>space: .asciiz &quot; &quot;</span></span>
<span class="line"><span>msg_rows: .asciiz &quot;Enter number of rows : &quot;</span></span>
<span class="line"><span>msg_columns: .asciiz &quot;Enter number of columns : &quot;</span></span>
<span class="line"><span>msg_input: .asciiz &quot;Enter matrix ( row major form ) : &quot;</span></span>
<span class="line"><span>maximum : .asciiz&quot;The maximum element is : &quot;</span></span>
<span class="line"><span>minimum : .asciiz&quot;The minimum element is :</span></span>
<span class="line"><span>mat1: .space 100</span></span>
<span class="line"><span>input: .space 100</span></span>
<span class="line"><span>.text</span></span>
<span class="line"><span>main:</span></span>
<span class="line"><span>  li $v0, 4</span></span>
<span class="line"><span>  la $a0, msg_rows</span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 5</span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span>  move $t0, $v0 # $t0 = number of rows</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 4</span></span>
<span class="line"><span>  la $a0, msg_columns</span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 5</span></span>
<span class="line"><span>  syscall </span></span>
<span class="line"><span>  move $t1, $v0 # $t1 = number of columns</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 4</span></span>
<span class="line"><span>  la $a0, msg_input</span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0, 8 # syscall for read_str</span></span>
<span class="line"><span>  la $a0, input # Load address of input buer</span></span>
<span class="line"><span>  li $a1, 100 # Maximum length</span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  la $t2, input</span></span>
<span class="line"><span>  la $t3, mat1</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $t5, 0</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  # t2 - address of input string</span></span>
<span class="line"><span>  # t3 - address of matrix</span></span>
<span class="line"><span>  # t4 - used to iterate through string</span></span>
<span class="line"><span>  # t5 - used to calculate number</span></span>
<span class="line"><span></span></span>
<span class="line"><span>input_loop:</span></span>
<span class="line"><span>  lb $t4, 0($t2)</span></span>
<span class="line"><span>  beq $t4, 32, store</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # when a space is detected add the number calculated to the array and continue</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  beq $t4, $zero , end_input</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  #In ASCII encoding, the decimal value 32 corresponds to the space character (&#39; &#39;)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  #This loop exist to calculate numbers that have more than one digit , since our input is a string</span></span>
<span class="line"><span>  # we need to iterate and add the characters until we detect a space</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  sub $t6 , $t4, 48 # converts character to integer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # for calculating the number</span></span>
<span class="line"><span>  mul $t5, $t5, 10</span></span>
<span class="line"><span>  add $t5, $t5, $t6</span></span>
<span class="line"><span>  addi $t2, $t2, 1</span></span>
<span class="line"><span>  j input_loop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>store:</span></span>
<span class="line"><span>  sw $t5, 0($t3) #store the number obtained in the 2D-array</span></span>
<span class="line"><span>  addi $t3, $t3, 4 #increment the address to next memory block</span></span>
<span class="line"><span>  li $t5, 0</span></span>
<span class="line"><span>  add $t2 , $t2 , 1 #increment the index of string</span></span>
<span class="line"><span>  j input_loop #loop back to the input to continue iteration of string</span></span>
<span class="line"><span></span></span>
<span class="line"><span>end_input :</span></span>
<span class="line"><span>  li $t6 , 0 # Initialize row index</span></span>
<span class="line"><span>  la $t8, mat1 # Load address of array for printing</span></span>
<span class="line"><span>  li $v0, 4</span></span>
<span class="line"><span>  la $a0, newline</span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span></span></span>
<span class="line"><span>find_min_max:</span></span>
<span class="line"><span>  li $t3 , 0 # Initialize max element to 0</span></span>
<span class="line"><span>  li $t2 , 0xffffffff</span></span>
<span class="line"><span>  li $t6 , 0 # Initialize row index to 0</span></span>
<span class="line"><span>  la $a0 , mat1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>row_loop:</span></span>
<span class="line"><span>  beq $t6, $t0 , end # If all rows have been checked, exit</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $t7, 0 # Initialize column index to 0 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>column_loop:</span></span>
<span class="line"><span>  beq $t7, $t1 , end_column_loop # If all columns have been checked, move to next row</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  lw $t8, 0($a0) # Load current element from array</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Compare current element with max element and the min element</span></span>
<span class="line"><span>  bgt $t8, $t3, update_max # if element greater than max element , update max</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  min :</span></span>
<span class="line"><span>  blt $t8 , $t2 , update_min # if element smaller than min element, update min</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  increment :</span></span>
<span class="line"><span>  addi $a0, $a0, 4 # Move to next column</span></span>
<span class="line"><span>  addi $t7, $t7, 1 # Increment column index</span></span>
<span class="line"><span>  j column_loop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>update_max:</span></span>
<span class="line"><span>  move $t3 , $t8 # Update max element</span></span>
<span class="line"><span>  j min # control goes back to checking for the conditional statement of min element</span></span>
<span class="line"><span></span></span>
<span class="line"><span>update_min:</span></span>
<span class="line"><span>  move $t2 , $t8 # Update min element</span></span>
<span class="line"><span>  j increment # control goes back to incrementing the looping values</span></span>
<span class="line"><span></span></span>
<span class="line"><span>End_column_loop:</span></span>
<span class="line"><span>  addi $t6, $t6, 1 # Increment row index</span></span>
<span class="line"><span>  j row_loop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>end :</span></span>
<span class="line"><span>  li $v0 , 4</span></span>
<span class="line"><span>  la $a0 , maximum  </span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0 , 1</span></span>
<span class="line"><span>  move $a0 , $t3 # printing the maximum element</span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0 , 4</span></span>
<span class="line"><span>  la $a0 , newline</span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0 , 4</span></span>
<span class="line"><span>  la $a0 , minimum # printing the minimum element</span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  li $v0 , 1</span></span>
<span class="line"><span>  move $a0 , $t2</span></span>
<span class="line"><span>  syscall</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  li $v0 , 10</span></span>
<span class="line"><span>  syscall</span></span></code></pre></div><h3 id="output-1" tabindex="-1"><strong>Output</strong> <a class="header-anchor" href="#output-1" aria-label="Permalink to &quot;**Output**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  Enter number of rows :3</span></span>
<span class="line"><span>  Enter number of columns :3</span></span>
<span class="line"><span>  Enter matrix ( row major form ) : 1 2 34 5 6 7 300 9 22</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  The maximum element is : 300</span></span>
<span class="line"><span>  The minimum element is : 1</span></span></code></pre></div><h3 id="more-questions" tabindex="-1"><strong>More Questions</strong> <a class="header-anchor" href="#more-questions" aria-label="Permalink to &quot;**More Questions**&quot;">​</a></h3><p><em>-&gt;Searching in Matrix: Write a MIPS assembly program to search for a given element in a matrix and return its position if found.</em></p><p><em>-&gt;Matrix Addition: Write a MIPS program to add two matrices of the same size</em></p><p><em>-&gt;Transpose of a Matrix: Write a MIPS assembly program to find the transpose of a given matrix.</em></p><p>★ <strong>MIPS code for if statements</strong> ● Iftheconditionisanequalityusebeq,bne ● Iftheconditionisacomparisoncombinebeq/bnewithset-on-less-than</p><p><strong>Why not blt or bge?</strong> While blt and bge (pseudo-instructions) are available in MIPS, beq and bne are favoured inconditional statements for their efficiency making them the common choice.</p><p><strong>Example 1)</strong> Given,f:$s0, g:$s1, h:$s2, i:$s3, j:$s4</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  if(i==j)</span></span>
<span class="line"><span>    f = g + h;</span></span>
<span class="line"><span>  else</span></span>
<span class="line"><span>    f = g - h;</span></span></code></pre></div><p><strong>Solution 1 :-</strong> Corresponding MIPS code</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  bne $s3, $s4, else</span></span>
<span class="line"><span>  add $s0, $s1, $s2</span></span>
<span class="line"><span>  j endif</span></span>
<span class="line"><span>else: sub $s0, $s1, $s2</span></span>
<span class="line"><span>endif: ...........</span></span></code></pre></div><p><strong>Example 2)</strong> Given,f:$s0 ,g:$s1 ,h:$s2 ,i:$s3 ,j:$s4</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  if(i&lt;j)</span></span>
<span class="line"><span>    f=g+h;</span></span>
<span class="line"><span>  else</span></span>
<span class="line"><span>    f=g-h;</span></span></code></pre></div><p><strong>Solution 2 :-</strong> Corresponding MIPS code</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  slt $to, $s3, $s4</span></span>
<span class="line"><span>  beq $to, $zero, else</span></span>
<span class="line"><span>  add $s0, $s1, $s2</span></span>
<span class="line"><span>  j endif</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>  sub $s0, $s1, $s2</span></span>
<span class="line"><span>endif: .......</span></span></code></pre></div><p>★ <strong>MIPS code for Loop statements</strong></p><p>Although there are said to be 3 different types of loops in C namely, do/while, while and for loop, they are all functionally identical. In other words, you can take any for-loop and easily turn it into a while-loop.</p><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  for(i= </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ;i&lt; 10 ;i++){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    loopbody</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span></code></pre></div><p>or</p><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  inti=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  while(i&lt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    loopbody</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    i++</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span></code></pre></div><p><strong>Example 1)</strong> Given, i:$s3, k:$s</p><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  while(i &lt; j)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    i+=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span></code></pre></div><p><strong>Solution 1 :-</strong> Corresponding MIPS code</p><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">loop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  slt $t0, $s3, $s4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  beq $t0, $zero, exit</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  addi $s3, $s3, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">loop</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exit:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ...</span></span></code></pre></div><p><strong>Example 2)</strong> Given i:$t0, k is some integer</p><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  for(i = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; i &lt; k; i++){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    // </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">loop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> body</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span></code></pre></div><p><strong>Solution 2 :-</strong> Corresponding MIPS code</p><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $t0, $zero, $zero</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # i is initialized to 0, $t0 = 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Loop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: // </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">loop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> body</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  addi $t0, $t0, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # i ++</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  slti $t1, $t0, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # $t1 = 1 if i &lt; 4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  bne $t1, $zero, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Loop</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # go to Loop if i &lt; 4</span></span></code></pre></div><p><strong>Example 3)</strong> Given, i:$s3, base address of arr:$s6, k:$s</p><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  while(arr[i] == k)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    i+=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span></code></pre></div><p><strong>Solution 3 :-</strong> Corresponding MIPS code</p><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">loop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  sll $t0, $s3, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $t1, $t0, $s6</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  lw $t2, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($t1)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  bne $t2, $s5, exit</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  addi $s3, $s3, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">loop</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exit:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...</span></span></code></pre></div><p>★ <strong>Procedures in MIPS</strong></p><p>Understanding the memory layout and the way procedures are called is crucial for writing efficient and correct MIPS assembly code.</p><p>➢ Memory Layout</p><img src="`+m+'"><p>➢ Stack allocation (refer Recursion in MIPS(non-leaf procedure) for detailed explanation)</p><img src="'+b+'"><p>(a) before, (b) during, and (c) after a procedure call.</p><p>There are two types of procedure calling-</p><p><strong>1) Leaf Procedures:</strong> These procedures do not call other procedures.</p><p>When a leaf procedure is called:</p><p>● There turn address is saved on the stack. ● A stack frame/procedure frame/activation record is setup to store local variables. ● Arguments may be passed in registers or on the stack. ● The procedure executes its code.</p><p>Upon completion,it restores the stack pointer and returns to the saved return address.</p><p><strong>2) Non-leaf Procedures(NestedProcedures):</strong> These procedures call other procedures, eg.- <strong>Recursive Functions/Procedures.</strong></p><p>In addition to the steps for leaf procedures, non-leaf procedures must manage:</p><p>● Saving and restoring additional registers beyond there turn address. ● Managing multiple levels of procedure calls and returns. ● Ensuring that data in registers is preserved a cross nested calls. ● Properly handling there turn value from called procedures.</p><p>★ <strong>Function (Procedure) calling in MIPS</strong></p><p>In MIPS assembly language, passing parameters to functions involves using registers. Unlike high-level languages where parameters are often passed on the stack,MIPS typically uses specific registers for passing arguments.</p><p>● $a0 to $a3 :These are argument registers and are used to pass the first four arguments to a function. If a function has more than four parameters,additional parameters are typically passed on the stack.</p><p>● $v0 and $v1: These are value registers and are used to return values from functions. Functions can return up to two values using these registers.</p><img src="'+f+`"><p>(Note:-i) Register 1, called $at, is reserved for the assembler.<br> ii) Registers 26–27, called $k0–$k1 are reserved for the operating system.)</p><p>➢ <strong>Steps in calling a procedure (function)</strong></p><p>In MIPS assembly language, procedure calling follows a similar structure to function calls in high-level languages like C.</p><p>The following steps typically occur in both leaf and non-leaf functions but there are some nuances in how they&#39;re implemented, especially regarding the handling of the stack:</p><p>● <strong>Arguments Passing</strong> :.Arguments to the function can be passed via registers or the stack, depending on the calling convention. In register-based passing, arguments are loaded in to designated argument registers like $a0-$a3. If there are more arguments than available registers, excess arguments are typically passed on the stack.</p><p>● <strong>Jump and Link (jal)</strong> :jal makes the control jump to the given address while storing there turn address at PC+4 in the $ra register This effectively sets up the return mechanism for the function call.</p><p>● <strong>Function Prologue (Non-leaf functions):</strong> Non-leaf functions need to setup a stack frame. This involves: Saving the return address($ra) on to the stack, saving any callee- saved registers on to the stack(these are typically $s0-$s7),setting up the frame pointer($fp) to establish a reference point for accessing local variables and saved registers.</p><p>● <strong>Function Execution</strong> :The function performs its task, accessing arguments, local variables, and performing computations.</p><p><strong>● Function Epilogue (Non-leaf functions):</strong> Before returning, non-leaf functions need to cleanup the stack frame and restore the state of callee-saved registers.This involves restoring callee-saved registers from the stack, restoring the return address($ra) from the stack resetting the stack pointer($sp) to deallocate the stack frame, jumping back to the return address using the jr $ra instruction.</p><p>● Return: Upon completing its task, the function returns control to the caller. If it&#39;s a leaf function, it typically involves jumping back to the return address stored in $ra using the jr $ra instruction. For non-leaf functions, the return sequence includes restoring the stack frame and registers before jumping back to the caller.</p><p>(Note:-For simplicity we will only use $sp and extend the stack at procedure entry/exit)</p><p><strong>Example 1)</strong> Calling a procedure which prints a string</p><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">//code</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">printFunction()</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a=a+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">//code</span></span></code></pre></div><p><strong>Solution 1 :-</strong> Corresponding MIPS code</p><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hello_string:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .asciiz &quot;Hello, world!\\n&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # String definition</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.text</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">....previous code</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jal printFunction #jump to printFunction</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">addi $s2, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">....further code</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li $v0, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Set syscall code 10 for exit</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">syscall</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Perform syscall to exit the program</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">printFunction:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">li $v0, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Set syscall code 4 to print a string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">la $a0, hello_string</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Load the address of the string</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">syscall</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Perform syscall to print</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jr $ra</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Return control to PC + 4</span></span></code></pre></div><p>● When jal is used, the control moves to the address specified in the instruction and the address of the next instruction is stored in $ra.</p><p>● When the procedure ends jr $ra is used to return control back to the next address from where it jumped.</p><p>● These procedures are usually placed after the “main” procedure to avoid instruction overlap.</p><p><strong>Example 1)</strong> Calling a function with parameters</p><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">//code</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result=addNumbers(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">//code</span></span></code></pre></div><p><strong>Solution 1 :-</strong> Corresponding MIPS code</p><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  li $a0, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Load first parameter (5) into $a0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  li $a1, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Load second parameter (7) into $a1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  jal addNumbers</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Jump to addNumbers function</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  move $s0, $v0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Store the result returned by addNumbers in $s0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Further code</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  li $v0, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Set syscall code 10 for exit</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  syscall</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Perform syscall to exit the program</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addNumbers:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $v0, $a0, $a1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Add the values of $a0 and $a1 and store the result in $v0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  jr $ra</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Return control to the next instruction after jal</span></span></code></pre></div><p>● In the main function, parameters are passed to the addNumbers function by loading values into registers $a0 and $a1.</p><p>● The jal instruction is used to jump to the addNumbers function.</p><p>● Inside the addNumbers function, the parameters are accessed from the $a0 and $a1 registers.</p><p>● The result of the addition is stored in register $v0, which is commonly used to return function results in MIPS.</p><p>● Finally, jr $ra is used to return control back to the instruction after the jal in the main function.</p><p>★ <strong>Recursion in MIPS (non-leaf procedure)</strong></p><p>In MIPS assembly language, implementing recursion involves understanding function calls and stack manipulation.</p><p><strong>The Stack in MIPS Assembly</strong></p><p>● The stack is a crucial data structure used in MIPS assembly language for managing function calls, local variables, and return addresses. ● It operates based on the Last-In-First-Out (LIFO) principle, meaning the last item pushed onto the stack is the first item to be popped off.</p><p><strong>Stack Operations:</strong></p><p><strong>Stack Pointer ($sp):</strong> ● The stack pointer register, $sp, points to the top of the stack. It keeps track of the current position in memory where new items are pushed onto or popped off the stack.</p><p><strong>Push Operation:</strong> ● To push data onto the stack, the stack pointer is decremented to reserve space for the new item, and then the data is stored at the memory location pointed to by the stack pointer.</p><p><strong>Pop Operation:</strong> ● To pop data off the stack,the data is retrieved from the memory location pointed to by the stack pointer, and then the stack pointer is incremented to remove the item from the stack.</p><p><strong>Stack Usage in Function Calls:</strong><strong>Function Prologue:</strong> ● When a function is called, the current contents of relevant registers (such as there turn address and callee-saved registers) are typically saved on the stack to ensure they are preserved. ● This process is often referred to as the function prologue.</p><p><strong>Function Epilogue:</strong> ● Upon completion of the function, the saved values on the stack are restored to their original registers. ● This process is known as the function epilogue.</p><p><strong>Example)</strong> Function Call and Stack Usage</p><p>● When main calls my Function using jal, the return address (the address of the instruction following the function call) is automatically saved in register $ra. ● Inside my Function, the function prologue allocates space on the stack to save the return address. ● The function body executes the desired operations. ● Finally, in the function epilogue, the return address is restored, and the stack space allocated in the prologue is deallocated before returning control to the caller.</p><p>To understand recursion in MIPS, a good understanding of the stack pointer and how it operates on memory is imperative. Recursion involves careful management of the function call stack, ensuring that return addresses and local variables are properly saved and restored. This example illustrates the process of calculating the factorial of a number using recursion in MIPS assembly language.</p><p><strong>Example) Calculating the factorial of a number using recursion</strong></p><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">//code</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result = factorial(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">//code</span></span></code></pre></div><p><strong>Solution 1 :-</strong> Corresponding MIPS code</p><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  li $a0, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Load the value 5 (number whose factorial is to be calculated) into $a0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  jal factorial</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Jump to the factorial function</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  move $s0, $v0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Store the result returned by factorial in $s0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Further code using the result stored in $s0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  li $v0, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Set syscall code 10 for exit</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  syscall</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Perform syscall to exit the program</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">factorial:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Function prologue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  addi $sp, $sp, -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Allocate space on the stack for local variables</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  sw $ra, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($sp)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Save the return address on the stack</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Check for base case: if n &lt;= 1, return 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  li $t0, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Load the value 1 into $t0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ble $a0, $t0, base_case</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Branch to base_case if $a0 (n) &lt;= $t0 (1)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Recursive case: n * factorial(n - 1)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  addi $a0, $a0, -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Decrement $a0 (n) by 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  jal factorial</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Recursive call to factorial function</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  lw $ra, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($sp)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Restore the return address from the stack</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  addi $sp, $sp, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Deallocate space on the stack for local variables</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  mul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $v0, $a0, $v0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Multiply n by the result of factorial(n - 1)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  jr $ra</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Return control to the caller</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">base_case:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Base case: n &lt;= 1, return 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  li $v0, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Load the value 1 into $v0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  lw $ra, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($sp)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Restore the return address from the stack</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  addi $sp, $sp, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Deallocate space on the stack for local variables</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  jr $ra</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Return control to the caller</span></span></code></pre></div><p>● In the main function, the value 5 is loaded into register $a0 to calculate its factorial.<br> ● The factorial function is then called using the jal instruction.<br> ● Inside the factorial function, the base case checks if the input value n is less than or equal to 1.If so,it returns 1.<br> ● Otherwise,the function decrements n by 1 and recursively calls itself with the decremented value.<br> ● The result of the recursive call is then multiplied by n to compute the factorial. ● Finally,the result is returned to the caller using register $v0.</p><h3 id="references" tabindex="-1"><strong>References</strong> <a class="header-anchor" href="#references" aria-label="Permalink to &quot;**References**&quot;">​</a></h3><p>J.L.Hennessy and D.A.Patterson Computer Organization and Design:The Hardware/Software Interface, Fifth Edition<br> “Digital Logic and Computer Design” by M.Morris Mano “Digital Fundamentals” by Thomas L.Flyod <a href="http://www.cs.missouristate.edu/MARS/" target="_blank" rel="noreferrer">http://www.cs.missouristate.edu/MARS/</a><a href="https://www.d.umn.edu/~gshute/mips/directives-registers.pdf" target="_blank" rel="noreferrer">https://www.d.umn.edu/~gshute/mips/directives-registers.pdf</a><a href="https://courses.missouristate.edu/KenVollmar/mars/Help/SyscallHelp.html" target="_blank" rel="noreferrer">https://courses.missouristate.edu/KenVollmar/mars/Help/SyscallHelp.html</a><a href="https://courses.missouristate.edu/KenVollmar/mars/Help/MarsHelpIntro.html" target="_blank" rel="noreferrer">https://courses.missouristate.edu/KenVollmar/mars/Help/MarsHelpIntro.html</a><a href="https://riptutorial.com/mips/example/29993/mars-mips-simulator" target="_blank" rel="noreferrer">https://riptutorial.com/mips/example/29993/mars-mips-simulator</a><a href="https://bytes.usc.edu/files/ee109/documents/MARS_Tutorial.pdf" target="_blank" rel="noreferrer">https://bytes.usc.edu/files/ee109/documents/MARS_Tutorial.pdf</a></p>`,322);function P(I,T,_,M,B,j){return $(),E("div",null,[w,s(" Run the program. If a breakpoint has been set the program will stop at the next breakpoint. "),C,s(" Trace (Step) Into. Executes a single instruction. If the instruction is a procedure call (jal) the simulator will stop at the first instruction of the procedure. "),F,s(" Backstep. Undo the last step taken in the code. "),x,s(" Pause the currently running program. Press the run button to continue execution. "),q,s(" Stop the currently running program. You will need to reset the simulator to execute the program again after stopping it. "),A,s(" Reset. Resets the simulator, reinitializing the registers, program counter, and memory. "),S,s(" Adjusts the speed that the simulator runs at. "),D])}const N=y(v,[["render",P]]);export{L as __pageData,N as default};
