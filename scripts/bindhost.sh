STRING="127.0.0.1 www.koanext.com"
FILE="/etc/hosts"
if grep -q "$STRING" "$FILE"; then
    echo "already bind host $STRING"
else
    echo "binding host $STRING"
    sudo sh -c "echo '\n$STRING' >> $FILE"
fi
